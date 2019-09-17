import { SET_USER } from './actions';

const initialState = {
  name: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER: 
      return {
        ...state,
        name: action.payload
      }
    default:
      return state;
  }
}

export default reducer;