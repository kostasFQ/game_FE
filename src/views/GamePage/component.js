import React, { Fragment, PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import MainButtom from 'components/Buttons/MainButton/component';
import Counter from 'components/Counter/component';
import Countdown from 'components/Countdown/container';
import FinalCount from 'components/FinalCount/container';

class GamePage extends PureComponent {
  state = {
    clicks: 0,
  }

  increment = () => {
    this.setState((state) => ({ clicks: state.clicks + 1 }));
  }

  componentDidUpdate(prevProps) {
    const { clicks } = this.state;
    const { saveCount, game: { gameOver } } = this.props;
    const { game: { gameOver: prevGameOver } } = prevProps;

    if (gameOver && prevGameOver !== gameOver) {
      saveCount(clicks);
      this.setState(() => ({ clicks: 0 }));
    }
  }

  render() {
    const { clicks } = this.state;
    const { game: { gameStarted, gameOver } } = this.props;

    if (!gameStarted) { return <Countdown /> }

    if (gameOver) { return <FinalCount /> }

    return (
      <Fragment>
        <Counter clicks={clicks} />
        <MainButtom onClick={this.increment} />
      </Fragment>
    );
  }
}

export default withRouter(GamePage);