import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Button from 'components/Buttons/Button/component';
import buttonStyles from 'components/Buttons/Buttons.module.scss';
import styles from './FinalCount.module.scss';
import { saveResultUrl } from 'api/urls';

class FinalCount extends PureComponent {
  state = { value: '', error: false };

  restart = () => {
    const { saveCount, toggleGameOver, toggleGameStarted } = this.props;
    saveCount();
    toggleGameOver(false);
    toggleGameStarted(false);
  }

  submitForm = async e => {
    e.preventDefault();
    const { game: { totalCount = 0, initialTime }, makeCall, history } = this.props;
    const { value } = this.state;
    const body = {
      name: value,
      score: totalCount,
      average: (totalCount / initialTime).toFixed(1),
      seconds: initialTime
    }

    if (value.length === 0) {
      this.setState(() => ({ error: true }));
      return;
    }

    this.setState(() => ({ error: false }));
    await makeCall(saveResultUrl(), body);
    history.push('/');
  }

  fillField = e => {
    const { value } = e.target;
    this.setState(() => ({ value }));
  }

  render() {
    const { game: { totalCount = 0, initialTime }, history } = this.props;
    const { error } = this.state;

    return (
      <div className={styles.finalCount__container}>
        <div className={styles.finalCount__container__result}>
          <span className={styles.finalCount__container__result_text}>You have</span>
          <div className={styles.finalCount__container__result_digits}>{totalCount}</div>
          <span className={styles.finalCount__container__result_text}>
            {totalCount.toString().match(/^1$/) ? 'point ' : 'points '}
            for&nbsp;
            {initialTime} {initialTime.toString().match(/^1$/) ? ' second' : ' seconds'}
          </span>
          <div className={styles.finalCount__container__result_text}>it's {(totalCount / initialTime).toFixed(1)} clicks per second</div>
        </div>
        <form onSubmit={this.submitForm} className={styles.finalCount__container__form}>
          so, you can
          <input placeholder="Enter your name here" onChange={this.fillField}
            className={cn(styles.finalCount__container__form_input,
              { [styles.finalCount__container__form_input_error]: error }
            )}
          />
          - and -
          <Button type='submit' title='SUBMIT' className={buttonStyles.submitButton} />
        </form>
        - or -
        <Button onClick={this.restart} title='RESTART' className={buttonStyles.restartButton} />
        <Button onClick={() => { history.push('/') }} title='BACK TO MAIN' className={buttonStyles.restartButton} />
      </div>
    )
  }
};

FinalCount.defaultProps = {
  totalCount: 0,
};

FinalCount.propTypes = {
  totalCount: PropTypes.number,
  saveCount: PropTypes.func.isRequired,
  toggleGameOver: PropTypes.func.isRequired,
  toggleGameStarted: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired
}

export default withRouter(FinalCount);