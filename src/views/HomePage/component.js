import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'components/Buttons/Button/component';
import buttonStyles from 'components/Buttons/Buttons.module.scss';
import SetTimer from 'components/SetTimer/container';
import LeaderBoard from 'components/LeaderBoard/container';
import styles from '../assets/HomePage.module.scss';

class HomePage extends Component {

  goToGamePage = () => {
    const { history, game: { initialTime }, toggleGameStarted, toggleGameOver } = this.props;
    toggleGameStarted(false);
    toggleGameOver(false);
    history.push(`/game/${initialTime}`);
  }

  render() {
    const { game: { gameStarted, gameOver } } = this.props;

    return (
      <div className={styles.homePage_container}>
        <SetTimer />
        <Button
          onClick={this.goToGamePage}
          title='START!'
          className={buttonStyles.startButton}
          disabled={gameStarted && !gameOver}
        />
        <LeaderBoard size={10} />
      </div>
    );
  }
}

HomePage.defaultProps = {
  initialTime: 0,
  gameStarted: false,
  gameOver: false,
};

HomePage.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  initialTime: PropTypes.number,
  toggleGameStarted: PropTypes.func.isRequired,
  toggleGameOver: PropTypes.func.isRequired,
  gameStarted: PropTypes.bool,
  gameOver: PropTypes.bool,
}

export default withRouter(HomePage);