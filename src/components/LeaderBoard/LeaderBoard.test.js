import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';
import _store from '../../../mocks/store';
import LeaderBoard from './container';
const mockStore = configureStore([thunk]);
const initialState = { game: _store };
const store = mockStore(initialState);

const instance = renderer.create(
  <Provider store={store}>
    <StaticRouter location="/game">
      <LeaderBoard />
    </StaticRouter>
  </Provider>,
);

test('FinalCount should be render', () => {
  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})