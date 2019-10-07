import { INCREMENT } from './actions';

const initialState = {
  clicks_count: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      let clicks = state.clicks_count;
      clicks++;
      return {
        ...state,
        clicks_count: clicks
      }
    default:
      return state;
  }
}

export default reducer;