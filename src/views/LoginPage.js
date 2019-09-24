import React from 'react';
import LoginForm from 'components/LoginForm';
import styles from 'views/assets/LoginPage.module.scss';

function LoginPage() {
  return (
    <div className={styles.loginWindow}>
      <LoginForm />
    </div>
  );
}

export default LoginPage;