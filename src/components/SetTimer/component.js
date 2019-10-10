import React, { Component, Fragment } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './SetTimers.module.scss';
import seconds from 'assets/helpers/secondsArray';

class SetTimer extends Component {

  select= e => {
    const { target: { value } } = e;
    const { setGameTimer } = this.props;
    setGameTimer(value);
  }

  render() {
    const { game: { gameStarted, gameOver, initialTime } } = this.props;
    
    return (
      <Fragment>
        <div>select how many seconds you want</div>
        <form onClick={this.select} className={styles.setTimers__container}>
          <div className={styles.setTimers__container__checkboxes}>
            {
              seconds.map(i => (
                <input name='seconds' type='button' value={i} key={i}
                      disabled={ (gameStarted && !gameOver) || i === +initialTime }
                  className={cn(
                    styles.setTimers__container__checkboxes__item,
                    { [styles.setTimers__container__checkboxes__item_active]: i === +initialTime },
                  )}
                />) ) 
            }
          </div>
        </form>
      </Fragment>
    );
  }
}

SetTimer.defaultProps = {
  gameStarted: undefined,
  gameOver: undefined,
  initialTime: undefined,
};

SetTimer.propTypes = {
  gameStarted: PropTypes.bool,
  gameOver: PropTypes.bool,
  initialTime: PropTypes.number,
  setGameTimer: PropTypes.func.isRequired,
}

export default SetTimer;
