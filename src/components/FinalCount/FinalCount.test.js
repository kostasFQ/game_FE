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
  backButton.props.onClick();
})

test('Button "RESTART" click', () => {
  const testInstance = instance.root;
  const buttons = testInstance.findAllByType('button');
  const restartButton = buttons.find(i => i.props.children === 'RESTART');
  restartButton.props.onClick();
})

test('Button "SUBMIT" click', () => {
  const testInstance = instance.root;
  const buttons = testInstance.findAllByType('button');
  const submitButton = buttons.find(i => i.props.children === 'SUBMIT');
  submitButton.props.onClick();
})

test('Inputs value was change', () => {
  const testInstance = instance.root;
  const input = testInstance.findByType('input');
  const e = { target: { value: 'test' } };
  input.props.onChange(e);
})

test('Submitting form', () => {
  const testInstance = instance.root;
  const form = testInstance.findByType('form');
  const e = { preventDefault: () => {} };
  form.props.onSubmit(e);
})

test('Catch error', () => {
  const testInstance = instance.root;
  const mockFoo = jest.fn( x => new Error())
  const form = testInstance.findByType('form');
  form.props.onSubmit(mockFoo);
})