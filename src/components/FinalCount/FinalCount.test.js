import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';
import _store from '../../../mocks/store';
import FinalCount from './container';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { saveResultUrl } from 'api/urls';

const mockStore = configureStore([thunk]);
const initialState = { game: _store };
const store = mockStore(initialState);

test('FinalCount should be render', async () => {
  const initialState = {
    game: {
      ..._store,
      totalCount: 1,
      initialTime: 1
    }
  };
  const store = mockStore(initialState);
  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game">
        <FinalCount />
      </StaticRouter>
    </Provider>,
  );

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})

test('FinalCount Button "BACK TO MAIN" click', async () => {
  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game">
        <FinalCount />
      </StaticRouter>
    </Provider>,
  );

  const testInstance = instance.root;
  const buttons = testInstance.findAllByType('button');
  const backButton = buttons.find(i => i.props.children === 'BACK TO MAIN');
  const buttonClick = jest.fn(() => backButton.props.onClick());
  buttonClick();
  expect(buttonClick).toHaveBeenCalled();
})

test('FinalCount Inputs value was change', async () => {
  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game">
        <FinalCount />
      </StaticRouter>
    </Provider>,
  );

  const testInstance = instance.root;
  let input = testInstance.findByType('input');
  const e = { target: { value: 'x' } };
  const change = jest.fn((e) => input.props.onChange(e));
  change(e);
  change(e);
  expect(change).toHaveBeenCalledTimes(2);
})

test('FinalCount form submit without error', async () => {
  const initialState = {
    game: {
      ..._store,
      totalCount: 15
    }
  };
  const store = mockStore(initialState);
  const mock = new MockAdapter(axios);
  mock.onPost(saveResultUrl()).replyOnce(200, { status: 201, response: 7 });
  const e = { target: { value: 'kst' }, preventDefault: () => { } };

  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game">
        <FinalCount />
      </StaticRouter>
    </Provider>,
  );
  const testInstance = instance.root;

  let input = testInstance.findByType('input');
  input.props.onChange(e);

  const form = testInstance.findByType('form');
  form.props.onSubmit(e);

  const time = () => new Promise((res, rej) => {
    setTimeout(() => {
      res("result");
    }, 1000)
  })
  await time();

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
  mock.reset();
})

test('FinalCount form submit with POST error', async () => {
  const mock = new MockAdapter(axios);
  mock.onPost(saveResultUrl()).replyOnce(200, { status: 201, error: "error" });
  const e = { target: { value: 'kst' }, preventDefault: () => { } };

  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game">
        <FinalCount />
      </StaticRouter>
    </Provider>,
  );
  const testInstance = instance.root;

  let input = testInstance.findByType('input');
  input.props.onChange(e);

  const form = testInstance.findByType('form');
  form.props.onSubmit(e);

  const time = () => new Promise((res, rej) => {
    setTimeout(() => {
      res("result");
    }, 1000)
  })
  await time();

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
  mock.reset();
})

test('FinalCount form submit network error', async () => {
  const mock = new MockAdapter(axios);
  mock.onPost(saveResultUrl(), {}).networkError();
  const e = { target: { value: 'kst' }, preventDefault: () => { } };

  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game">
        <FinalCount />
      </StaticRouter>
    </Provider>,
  );

  const testInstance = instance.root;
  let form = testInstance.findByType('form');
  form.props.onSubmit(e);

  mock.reset();
})

test('FinalCount Button "RESTART" click', async () => {
  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game">
        <FinalCount />
      </StaticRouter>
    </Provider>,
  );

  const testInstance = instance.root;
  const buttons = testInstance.findAllByType('button');
  const backButton = buttons.find(i => i.props.children === 'RESTART');
  const buttonClick = jest.fn(() => backButton.props.onClick());
  buttonClick();
  expect(buttonClick).toHaveBeenCalled();
})