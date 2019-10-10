import React from 'react';
import styles from './assets/NotFoundPage.module.scss';

const NotFoundPage = () => (
  <div className={styles.notFound__container}>
    <div className={styles.notFound__container__status}>404</div>
    <div className={styles.notFound__container__text}>Page not found.</div>
  </div>
)

export default NotFoundPage;