import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';
import _store from '../../../mocks/store';
import HomePage from './index';
const mockStore = configureStore([thunk]);
const initialState = { game: _store };
const store = mockStore(initialState);

test('FinalCount should be render', async () => {
  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/">
        <HomePage />
      </StaticRouter>
    </Provider>,
  );

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})

test('FinalCount button click', async () => {
  const store2 = {
    ..._store,
    gameStarted: true,
    gameOver: false
  };

  const initialState = { game: store2 };
  const store = mockStore(initialState);

  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/">
        <HomePage />
      </StaticRouter>
    </Provider>,
  );

  const testInstance = instance.root;
  const button = testInstance.findByType('button');
  const buttonClick = jest.fn(() => button.props.onClick());
  buttonClick();
  expect(buttonClick).toHaveBeenCalled();
})