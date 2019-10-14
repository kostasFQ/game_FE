import React, { Component } from 'react';
import cn from 'classnames';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
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

  componentDidUpdate(prevProps) {
    const { seconds, id } = this.state;
    const { game: { gameOver, gameStarted }, toggleGameOver, setGameTimer, location: { pathname } } = this.props;
    const { game: { gameStarted: prevGameStarted } } = prevProps;
    let [, , sec] = pathname.split('/');

    if (gameStarted && !gameOver && gameStarted !== prevGameStarted) {
      this.timerRun();
    }

    if (gameStarted && seconds === 0 && !gameOver) {
      clearInterval(this.interval);
      toggleGameOver(true);

      this.setState(() => ({ seconds: id }));
      setGameTimer(id);
    }

    if (pathname && pathname.includes('game') && id !== sec) {
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

Timer.defaultProps = {
  gameStarted: false,
  gameOver: false,
  pathname: '',
};

Timer.propTypes = {
  gameStarted: PropTypes.bool,
  gameOver: PropTypes.bool,
  pathname: PropTypes.string,
  setGameTimer: PropTypes.func.isRequired,
  toggleGameOver: PropTypes.func.isRequired,
}

export default withRouter(Timer);
