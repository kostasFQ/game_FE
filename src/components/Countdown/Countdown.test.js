import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';
import store from '../../../mocks/store';

import Countdown from './index';

const toggleGameStarted = jest.fn(() => { console.log('xxx') })
const initialState = { game: store, toggleGameStarted };
const mStore = configureMockStore([thunk]);
const mockStore = mStore(initialState);


test('Countdown should be render', () => {
  const instance = renderer.create(
    <Provider store={mockStore}>
      <StaticRouter location="/game" context={{}}>
        <Countdown />
      </StaticRouter>
    </Provider>,
  );

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
});

test('timer', async () => {
  const instance = await renderer.create(
    <Provider store={mockStore}>
      <StaticRouter location="/game" context={{}}>
        <Countdown />
      </StaticRouter>
    </Provider>,
  );

  const time = () => new Promise((res, rej) => {
    setTimeout(() => {
      res("result");
    }, 4000)
  })
  await time();

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
});

test('unmount', async () => {
  const instance = await renderer.create(
    <Provider store={mockStore}>
      <StaticRouter location="/game" context={{}}>
        <Countdown />
      </StaticRouter>
    </Provider>,
  );
  instance.unmount();

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})