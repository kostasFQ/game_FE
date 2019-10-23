import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';
import _store from '../../../mocks/store';
import LeaderBoard from './index';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { leaderBoard } from 'api/urls';

const mockStore = configureStore([thunk]);
const initialState = { game: _store };
const store = mockStore(initialState);

test('LeaderBoard should be render', async () => {
  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game">
        <LeaderBoard />
      </StaticRouter>
    </Provider>,
  );
  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
});

test('LeaderBoard get data', async () => {
  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game">
        <LeaderBoard />
      </StaticRouter>
    </Provider>,
  );

  const time = () => new Promise((res, rej) => {
    setTimeout(() => {
      res("result");
    }, 1000)
  })
  await time();

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
});

test('leader board error', async () => {
  const mock = new MockAdapter(axios);
  mock.onGet(leaderBoard(10)).networkError();

  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game">
        <LeaderBoard />
      </StaticRouter>
    </Provider>,
  );

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
  mock.reset();
});

