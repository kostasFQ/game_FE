import React from 'react';
import Button from 'components/Buttons/Button/component';
import styles from 'components/Buttons/Buttons.module.scss';

const FinalCount = ({ game: { totalCount = 0 }, saveCount, toggleGameOver, toggleGameStarted }) => {
  const click = () => {
    saveCount();
    toggleGameOver(false);
    toggleGameStarted(false);
  }
  
  return (
    <div>
      <div>Final - { totalCount }</div>
      <Button onClick={() => { click() }} title='RESTART' className={styles.restartButton}/>
      <Button title='SUBMIT' className={styles.submitButton}/>
    </div>
  )
};

export default FinalCount;