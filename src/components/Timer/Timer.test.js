import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';
import _store from '../../../mocks/store';
import Timer from './container';
const mockStore = configureStore([thunk]);

test('Timer should be render', async () => {
  const initialState = { game: _store };
  const store = mockStore(initialState);
  
  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game/1">
        <Timer />
      </StaticRouter>
    </Provider>,
  );

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})

test('Timer update seconds', async () => {
  const initialState = { game: _store };
  let store = mockStore(initialState);
  
  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game/1">
        <Timer />
      </StaticRouter>
    </Provider>,
  );

  const updatedState = {
    game: {
      ..._store,
      gameStarted: true,
      gameOver: false
    }
  };
  store = mockStore(updatedState);

  instance.update(
    <Provider store={store}>
      <StaticRouter location="/game/1">
        <Timer />
      </StaticRouter>
    </Provider>,
  )

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})

test('Timer update state', async () => {
    const initialState = {
    game: {
      ..._store,
      gameStarted: true,
      gameOver: false,
    }
  };
  let store = mockStore(initialState);

  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game/0">
        <Timer />
      </StaticRouter>
    </Provider>,
  );

  const time = () => new Promise( (res, rej) => {
    setTimeout(() => {
      res("result");
    }, 1000)
  } )
  await time();

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})

test('Timer unmount', async () => {
  const initialState = { game: _store };
  let store = mockStore(initialState);
  
  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game/1">
        <Timer />
      </StaticRouter>
    </Provider>,
  );
  instance.unmount();

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})