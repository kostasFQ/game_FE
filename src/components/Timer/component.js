import React, { Component } from 'react';
import cn from 'classnames';
import { withRouter } from 'react-router-dom';
import styles from './Timer.module.scss';

class Timer extends Component {
  state = {
    seconds: undefined,
    id: undefined
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

  componentDidUpdate(prevProps, prevState) {
    const { seconds, id } = this.state;

    const { game: { gameStarted: prevGameStarted } } = prevProps;
    const { game: { gameOver, gameStarted }, toggleGameOver, setGameTimer, location: { pathname } } = this.props;
    let [, , sec] = pathname.split('/');

    if (gameStarted && !gameOver && gameStarted !== prevGameStarted) {
      this.timerRun();
    }

    if (gameStarted && seconds === 0 && !gameOver) {
      clearInterval(this.interval);
      toggleGameOver(true);
      if (sec < 5) {
        this.setState(() => ({ seconds: 5 }));
        setGameTimer(5);
      } else {
        this.setState(() => ({ seconds: sec }));
        setGameTimer(sec);
      }
    }

    if (pathname && pathname.includes('game') && id !== sec) {
      sec < 5 ?
        this.setState(() => ({ seconds: 1, id: sec })) : // return to 5
        this.setState(() => ({ seconds: sec, id: sec }));
    }
  }

  render() {
    const { seconds } = this.state;
    const { game: { gameOver, gameStarted } } = this.props;

    return (
      <div className={styles.timersContainer}>
        <div className={cn(gameStarted && !gameOver ? styles.timersContainer__counter_visible : styles.timersContainer__counter_hide)}>
          <span className={styles.timersContainer__digits}>{seconds}</span> seconds remain
        </div>
      </div>
    );
  }
}

export default withRouter(Timer);
