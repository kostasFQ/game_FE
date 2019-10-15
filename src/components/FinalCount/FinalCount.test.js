import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';
import _store from '../../../mocks/store';
import FinalCount from './container';
const mockStore = configureStore([thunk]);
const initialState = { game: _store };
const store = mockStore(initialState);

const instance = renderer.create(
  <Provider store={store}>
    <StaticRouter location="/game">
      <FinalCount />
    </StaticRouter>
  </Provider>,
);

test('FinalCount should be render', () => {
  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})

test('Button "BACK TO MAIN" click', () => {
  const testInstance = instance.root;
  const buttons = testInstance.findAllByType('button');
  const backButton = buttons.find(i => i.props.children === 'BACK TO MAIN');
  const buttonClick = jest.fn( () => backButton.props.onClick());
  buttonClick();
  expect(buttonClick).toHaveBeenCalled();
})

test('Inputs value was change', () => {
  const testInstance = instance.root;
  let input = testInstance.findByType('input');
  const e = { target: { value: 'x' } };
  const change = jest.fn( (e) => input.props.onChange(e) );
  change(e);
  change(e);
  expect(change).toHaveBeenCalledTimes(2);
})
