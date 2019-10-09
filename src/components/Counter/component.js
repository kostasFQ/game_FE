import React from 'react';
import styles from './Counter.module.scss';

const Counter = ({ clicks }) => (
  <div className={styles.counter}>
    <div>you click</div>
    <div className={styles.counter__digit}>{ clicks }</div>
    <div>times</div>
  </div>
)

export default Counter;