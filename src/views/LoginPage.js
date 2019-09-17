import React from 'react';
import { Paper } from '@material-ui/core';
import LoginForm from 'components/LoginForm';
// import styles from 'assets/LoginPage.module.scss';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(9, 2),
  },
}));

function LoginPage() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      dddd
      <LoginForm />
    </Paper>
  );
}

export default LoginPage;