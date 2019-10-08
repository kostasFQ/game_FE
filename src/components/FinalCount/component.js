import React from 'react';
import Button from 'components/Buttons/Button/component';
import styles from 'components/Buttons/Buttons.module.scss';
import axios from 'axios';

const FinalCount = ({ game: { totalCount = 0 }, saveCount, toggleGameOver, toggleGameStarted }) => {
  const click = () => {
    saveCount();
    toggleGameOver(false);
    toggleGameStarted(false);
  }

  const ca = async () => {
    const { data } = await axios.post('http://localhost:9000/', {data: totalCount})
    console.log(`data - ${data}`)
  }
  
  return (
    <div>
      <div>Final - { totalCount }</div>
      <Button onClick={() => { click() }} title='RESTART' className={styles.restartButton}/>
      <Button onClick={() => { ca() }} title='SUBMIT' className={styles.submitButton}/>
    </div>
  )
};

export default FinalCount;