import React, { Component } from 'react';
import MainButtom from 'components/Buttons/MainButton/component';
import StartButtom from 'components/Buttons/StartButton/component';
import styles from './assets/HomePage.module.scss';

class HomePage extends Component {
  state = {
    clicks: 0
  }

  increment = () => {
    this.setState((state) => ({ clicks: state.clicks + 1 }) );
  }

  render() {
    const { clicks } = this.state;
    return (
      <div className={styles.homePage_container}>
        <div>you clicked { clicks } times</div>
        <MainButtom onClick={ this.increment } />
        <StartButtom onClick={ this.increment } />
      </div>
    );
  }
}

export default HomePage;