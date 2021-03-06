import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';
import _store from '../../../mocks/store';
import GamePage from './index';
const mockStore = configureStore([thunk]);

test('GamePage should be render Countdown', async() => {
  const initialState = { game: _store };
  const store = mockStore(initialState);

  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game">
        <GamePage />
      </StaticRouter>
    </Provider>,
  );

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})

test('GamePage should be render FinalCount', async () => {
  const store2 = {
    ..._store,
    gameStarted: true,
    gameOver: true
  }
  const initialState = { game: store2 };
  const store = mockStore(initialState);
  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game">
        <GamePage />
      </StaticRouter>
    </Provider>,
  );

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})

test('GamePage should be render', async () => {
  const store3 = {
    ..._store,
    gameStarted: true,
    gameOver: false
  }
  const initialState = { game: store3 };
  const store = mockStore(initialState);
  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game">
        <GamePage />
      </StaticRouter>
    </Provider>,
  );

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})

test('GamePage update', async () => {
  const initialState = { game: _store };
  const store = mockStore(initialState);
  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game">
        <GamePage />
      </StaticRouter>
    </Provider>,
  );

  const _updatedStore = {
    ..._store,
    gameStarted: true,
    gameOver: true
  };
  const _initialState = { game: _updatedStore };
  const updatedStore = mockStore(_initialState);
  instance.update(
    <Provider store={updatedStore}>
      <StaticRouter location="/game">
        <GamePage />
      </StaticRouter>
    </Provider>,
  );

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})

test('GamePage increment button click', async () => {
  const _updatedStore = {
    ..._store,
    gameStarted: true,
    gameOver: false
  };

  const initialState = { game: _updatedStore };
  const store = mockStore(initialState);
  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game">
        <GamePage />
      </StaticRouter>
    </Provider>,
  );

  const testInstance = instance.root;
  const button = testInstance.findByType('button');
  const buttonClick = jest.fn( () => button.props.onClick());
  buttonClick();
  expect(buttonClick).toHaveBeenCalled();
})

test('GamePage save count into store', async () => {
  const _updatedStore = {
    ..._store,
    gameStarted: true,
    gameOver: false,
    totalCount: 10
  };

  const initialState = { game: _updatedStore };
  const store = mockStore(initialState);
  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game">
        <GamePage />
      </StaticRouter>
    </Provider>,
  );

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})

test('GamePage unmount', async () => {
  const _updatedStore = {
    ..._store,
    gameStarted: true,
    gameOver: false,
    totalCount: 10
  };

  const initialState = { game: _updatedStore };
  const store = mockStore(initialState);
  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game">
        <GamePage />
      </StaticRouter>
    </Provider>,
  );
  instance.unmount();
  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})

