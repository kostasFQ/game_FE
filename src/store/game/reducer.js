import { TOGGLE_START_GAME, TOGGLE_END_GAME, SAVE_COUNT, SET_GAME_TIMER } from './actions';

const initialState = {
  gameStarted: false,
  gameOver: false,
  totalCount: 0,
  initialTime: 15
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
       case SET_GAME_TIMER:
         return {
           ...state,
           initialTime: action.payload
         } 
    default:
      return state;
  }
}

export default reducer;