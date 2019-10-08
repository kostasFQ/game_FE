import React, { Component } from 'react';
import Button from 'components/Buttons/Button/component';
import styles from './assets/HomePage.module.scss';
import { withRouter } from 'react-router-dom';
import buttonStyles from 'components/Buttons/Buttons.module.scss';

class HomePage extends Component {

  goToGamePage = () => {
    const { history } = this.props;
    history.push('/game');
  }

  render() {
    return (
      <div className={styles.homePage_container}>
        <Button onClick={ this.goToGamePage } title='CLICK TO START!' className={buttonStyles.startButton}/>
      </div>
    );
  }
}

export default withRouter(HomePage);