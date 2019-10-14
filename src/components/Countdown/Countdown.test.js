import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';
import store from '../../../mocks/store';

import Countdown from './container';

const initialState = { store };
const mStore = configureMockStore([thunk]);
const mockStore = mStore(initialState);


test('Countdown should be render', () => {
  const instance = renderer.create(
    <Provider store={mockStore}>
      <StaticRouter location="/" context={{}}>
        <Countdown />
      </StaticRouter>
    </Provider>,
  );

  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})