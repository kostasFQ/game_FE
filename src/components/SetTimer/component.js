import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import cn from 'classnames';
import styles from './SetTimers.module.scss';

const seconds = [5, 10, 15, 30, 60];

class SetTimer extends Component {

  select= e => {
    const { target: { value } } = e;
    const { setGameTimer } = this.props;
    setGameTimer(value);
  }

  render() {
    const { game: { gameStarted, gameOver, initialTime } } = this.props;
    
    return (
      <form onClick={this.select} className={styles.setTimers__container}>
        <div>select how many seconds you want</div>
        <div className={styles.setTimers__container__checkboxes}>
          {
            seconds.map(i => (
              <input name='seconds' type='button' value={i} key={i} disabled={gameStarted && !gameOver}
                className={cn(
                  styles.setTimers__container__checkboxes__item,
                  { [styles.setTimers__container__checkboxes__item_active]: i === +initialTime },
                )}
              />) ) 
          }
        </div>
      </form>
    );
  }
}

export default withRouter(SetTimer);