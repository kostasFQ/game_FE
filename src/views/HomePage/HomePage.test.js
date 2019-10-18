import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';
import _store from '../../../mocks/store';
import HomePage from './container';
const mockStore = configureStore([thunk]);
const initialState = { game: _store };
const store = mockStore(initialState);

const instance = renderer.create(
  <Provider store={store}>
    <StaticRouter location="/">
      <HomePage />
    </StaticRouter>
  </Provider>,
);

test('FinalCount should be render', () => {
  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})

test('FinalCount button click', () => {
  const store2 = {
    ..._store,
    gameStarted: true,
    gameOver: false
  };

  const initialState = { game: store2 };
  const store = mockStore(initialState);
  
  const instance = renderer.create(
    <Provider store={store}>
      <StaticRouter location="/">
        <HomePage />
      </StaticRouter>
    </Provider>,
  );

  const testInstance = instance.root;
  const button = testInstance.findByType('button');
  const buttonClick = jest.fn( () => button.props.onClick());
  buttonClick();
  expect(buttonClick).toHaveBeenCalled();
})