import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import cn from 'classnames';
import Button from 'components/Buttons/Button/component';
import buttonStyles from 'components/Buttons/Buttons.module.scss';
import styles from './FinalCount.module.scss';
// import axios from 'axios';

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
    const { game: { totalCount = 0 } } = this.props;
    const { value } = this.state;

    if (value.length === 0 ) {
      this.setState(() => ({ error: true }));
      return;
    }
    this.setState(() => ({ error: false }));

    // const { data } = await axios.post('http://localhost:9000/', { data: totalCount });
    // console.log(`data - ${data}`)
    console.log({ name: value, score: totalCount })
  }

  fillField = e => {
    const { value } = e.target;
    this.setState(() => ({ value }));
  }

  render() {
    const { game: { totalCount = 0 }, history } = this.props;
    const { error } = this.state;

    return (
      <div className={styles.finalCount__container}>
        <div className={styles.finalCount__container__result}>
          <span className={styles.finalCount__container__result_text}>You have</span>
          <div className={styles.finalCount__container__result_digits}>{ totalCount }</div>
          <span className={styles.finalCount__container__result_text}>
            { totalCount.toString().match(/^1$/) ? 'point' : 'points' }
          </span>
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

export default withRouter(FinalCount);
