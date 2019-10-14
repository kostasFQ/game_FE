import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainButtom from 'components/Buttons/MainButton/component';
import Counter from 'components/Counter/component';
import Countdown from 'components/Countdown/container';
import FinalCount from 'components/FinalCount/container';
import styles from 'views/assets/GamePage.module.scss';

class GamePage extends PureComponent {
  state = {
    clicks: 0,
  }

  increment = () => {
    this.setState((state) => ({ clicks: state.clicks + 1 }));
  }

  componentDidMount() {
    const { clicks } = this.state;
    const { game: { totalCount } } = this.props;
    if (clicks === 0 && totalCount !== 0) {
      this.setState(() => ({ clicks: totalCount }));
    }

  }

  componentWillUnmount() {
    const { clicks } = this.state;
    const { saveCount } = this.props;
    saveCount(clicks);
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

    if (!gameStarted) { return (<div className={styles.gamePage__container}> <Countdown /> </div>) }

    if (gameOver) { return (<div className={styles.gamePage__container}> <FinalCount /> </div>) }

    return (
      <div className={styles.gamePage__container}>
        <Counter clicks={clicks} />
        <MainButtom onClick={this.increment} />
      </div>
    );
  }
}

GamePage.defaultProps = {
  totalCount: 0,
  gameStarted: true,
  gameOver: false,
  pathname: '',
};

GamePage.propTypes = {
  totalCount: PropTypes.number,
  gameStarted: PropTypes.bool.isRequired,
  gameOver: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired,
  saveCount: PropTypes.func.isRequired,
}

export default withRouter(GamePage);