import React, { Component } from 'react';

class Countdown extends Component {
  state = {
    secondsToStart: 3,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => {
        return { secondsToStart: state.secondsToStart - 1 };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate() {
    const { secondsToStart } = this.state;
    const { toggleGameStarted } = this.props;

    if (secondsToStart === 0) {
      clearInterval(this.interval);
      toggleGameStarted(true);
    }
  }

  render() {
    const { secondsToStart } = this.state;
    return (
      <div >start from {secondsToStart} seconds</div>
    );
  }
}

export default Countdown;