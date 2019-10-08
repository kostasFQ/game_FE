import React, { Component } from 'react';
import cn from 'classnames';
import styles from './Timer.module.scss';

class Timer extends Component {
  state = {
    seconds: 5,
  }

  timerRun() {
    this.interval = setInterval(() => {
      this.setState(state => {
        return { seconds: state.seconds - 1 };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps) {
    const { seconds } = this.state;
    const { game: { gameStarted: prevGameStarted } } = prevProps;
    const { game: { gameOver, gameStarted }, toggleGameOver } = this.props;

    if (gameStarted && !gameOver && gameStarted !== prevGameStarted) {
      this.timerRun();
    }

    if (gameStarted && seconds === 0 && !gameOver) {
      clearInterval(this.interval);
      toggleGameOver(true);
      this.setState(() => ({ seconds: 5 }));
    }
  }

  render() {
    const { seconds } = this.state;
    const { game: { gameOver, gameStarted } } = this.props;

    return (
      <div className={styles.timersContainer}>
        <div className={cn(gameStarted && !gameOver ? styles.timersContainer__counter_visible : styles.timersContainer__counter_hide )}>
          <span className={styles.timersContainer__digits}>{ seconds }</span> seconds remain
        </div>
      </div>
    );
  }
}

export default Timer;
