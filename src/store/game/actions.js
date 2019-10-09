export const TOGGLE_START_GAME = 'TOGGLE_START_GAME';
export const TOGGLE_END_GAME = 'TOGGLE_END_GAME';
export const SAVE_COUNT = 'SAVE_COUNT';
export const SET_GAME_TIMER = 'SET_GAME_TIMER';

export const toggleGameStarted = payload => dispatch => {
  dispatch({ type: TOGGLE_START_GAME, payload })
}

export const toggleGameOver = payload => dispatch => {
  dispatch({ type: TOGGLE_END_GAME, payload })
}

export const saveCount = (payload = 0) => dispatch => {
  dispatch({ type: SAVE_COUNT, payload })
}

export const setGameTimer = payload => dispatch => {
  dispatch({ type: SET_GAME_TIMER, payload })
}