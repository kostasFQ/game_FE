import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NotFoundPage from 'views/NotFoundPage';
import GamePage from 'views/GamePage';
import HomePage from 'views/HomePage';
import Timer from 'components/Timer';
import Title from 'components/Title';
import seconds from 'helpers/secondsArray';

function App() {
  return (
    <Fragment>
      <Title />
      <Router>
        <Timer />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path={`/game/:time(${seconds.join('|')})`} children={<GamePage />} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
