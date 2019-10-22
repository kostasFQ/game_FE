import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NotFoundPage from 'views/NotFoundPage';
import GamePage from 'views/GamePage/container';
import HomePage from 'views/HomePage/container';
import Timer from 'components/Timer/container';
import Title from 'components/Title/component';
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
          {/* <Route path='/game/:time(5|10|15|30|60)' children={<GamePage />} /> */}
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
