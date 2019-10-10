import React, { Component } from 'react';
import Button from 'components/Buttons/Button/component';
import styles from '../assets/HomePage.module.scss';
import { withRouter } from 'react-router-dom';
import buttonStyles from 'components/Buttons/Buttons.module.scss';
import SetTimer from 'components/SetTimer/container';
import LeaderBoard from 'components/LeaderBoard/container';

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
          title='CLICK TO START!'
          className={buttonStyles.startButton}
          disabled={gameStarted && !gameOver}
        />
        <LeaderBoard size={10} />
      </div>
    );
  }
}

export default withRouter(HomePage);