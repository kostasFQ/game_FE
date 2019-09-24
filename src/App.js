import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { setUser } from './store/user/actions'
// import TopMenu from 'components/TopMenu/container';
import NotFound from 'views/NotFound';
import UserProfile from 'views/UserProfile';
import HomePage from 'views/HomePage';
import LoginPage from 'views/LoginPage';

function App(props) {
  return (
    <Fragment>
      <Router>
      {/* <TopMenu /> */}
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/profile' component={UserProfile} /> {/* TODO: need to make it as private route*/}
          <Route path='/login' component={LoginPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  state: state.user,
});

const mapDispatchToProps = dispatch => ({
  setUser: () => dispatch(setUser('kst')),
  resetUser: () => dispatch(setUser(null)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
