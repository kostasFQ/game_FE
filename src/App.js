import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import NotFoundPage from 'views/NotFoundPage';
import GamePage from 'views/GamePage/container';
import HomePage from 'views/HomePage';
import LoginPage from 'views/LoginPage';
import Timer from 'components/Timer/container';

function App() {
  return (
    <Fragment>
      <Router>
        <Timer />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/game/:time' component={GamePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Fragment>
  );
}


export default App;
