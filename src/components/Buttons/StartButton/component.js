import React from 'react';
import styles from 'components/Buttons/Buttons.module.scss';

const StartButton = ({ onClick }) => (
  <button onClick={onClick} className={styles.startButton}>CLICK TO START!</button>
);

export default StartButton;