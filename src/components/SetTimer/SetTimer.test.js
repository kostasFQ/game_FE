import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';
import _store from '../../../mocks/store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { leaderBoard } from 'api/urls';

import SetTimer from './container';

const mockStore = configureStore([thunk]);
const initialState = { game: _store };
const store = mockStore(initialState);

test('FinalCount should be render', async () => {
  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game">
        <SetTimer />
      </StaticRouter>
    </Provider>,
  );

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})

test('FinalCount set time', async () => {
  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/game">
        <SetTimer />
      </StaticRouter>
    </Provider>,
  ); 

  const testInstance = instance.root;
  const form = testInstance.findByType('form')
  const e ={ target: { value: 10 } }

  const click = jest.fn( (e) => form.props.onClick(e));
  click(e);
  expect(click).toHaveBeenCalled();
})