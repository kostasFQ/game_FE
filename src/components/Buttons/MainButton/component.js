import React from 'react';
import styles from 'components/Buttons/Buttons.module.scss';

const MainButton = ({ onClick }) => (
  <button onClick={onClick} className={styles.mainButton}>CLICK HERE!</button>
);

export default MainButton;