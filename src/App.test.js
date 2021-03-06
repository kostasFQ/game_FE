import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from './App';
import _store from '../mocks/store';

const initialState = { game: _store };
const mStore = configureMockStore([thunk]);
const store = mStore(initialState);

test('FinalCount should be render', async () => {
  const instance = await renderer.create(
    <Provider store={store}>
      <StaticRouter location="/" context={{}}>
        <App />
      </StaticRouter>
    </Provider>,
  );
  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})
