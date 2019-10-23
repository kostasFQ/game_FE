import React from 'react';
import styles from 'components/Buttons/Buttons.module.scss';
import PropTypes from 'prop-types';

const MainButton = ({ onClick }) => <button onClick={onClick} className={styles.mainButton}>CLICK HERE!</button>;

MainButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default MainButton;