import React from 'react';
import styles from './Counter.module.scss';
import PropTypes from 'prop-types';

const Counter = ({ clicks }) => (
  <div className={styles.counter}>
    <div>your points</div>
    <div className={styles.counter__digit}>{ clicks }</div>
    <div>times</div>
  </div>
)

Counter.propTypes = {
  clicks: PropTypes.number.isRequired
}

export default Counter;