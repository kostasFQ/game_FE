import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import game from './game/reducer';

const store = combineReducers({
  game
});

export default createStore(store,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);
