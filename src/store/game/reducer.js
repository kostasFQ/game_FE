import { TOGGLE_START_GAME, TOGGLE_END_GAME, SAVE_COUNT } from './actions';

const initialState = {
  gameStarted: false,
  gameOver: false,
  totalCount: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
     case TOGGLE_START_GAME:
       return {
         ...state,
         gameStarted: action.payload
       }
      case TOGGLE_END_GAME: 
       return {
         ...state,
         gameOver: action.payload
       }
      case SAVE_COUNT:
        return {
          ...state,
          totalCount: action.payload
        }
    default:
      return state;
  }
}

export default reducer;