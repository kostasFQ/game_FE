import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import TopMenu from 'components/TopMenu/container';
import NotFoundPage from 'views/NotFoundPage';
import UserProfilePage from 'views/UserProfilePage';
import HomePage from 'views/HomePage';
import LoginPage from 'views/LoginPage';
import RegistrationPage from 'views/RegistrationPage';

function App(props) {
  return (
    <Fragment>
      <Router>
      {/* <TopMenu /> */}
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegistrationPage} />
          <Route path='/profile' component={UserProfilePage} /> {/* TODO: need to make it as private route*/}
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  state: state.user,
});

export default connect(mapStateToProps)(App);
