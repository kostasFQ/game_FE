import store from './reducer';
import reducer from '../index';

const state = {
  gameStarted: false,
  gameOver: false,
  totalCount: 0,
  initialTime: 15
};

test('reduser', () => {
  expect(reducer.getState()).toEqual({game: { ...state } })
})

test('DEFAULT', () => {
  expect( store(undefined, { type: 'INIT' }) ).toEqual({ ...state })
})

test('TOGGLE_START_GAME', () => {
  expect( store(
    state,
    {
      type: 'TOGGLE_START_GAME',
      payload: true
    }
  ) 
  ).toEqual({
    ...state,
    gameStarted: true
  })
})

test('TOGGLE_END_GAME', () => {
  expect( store(
    state,
    {
      type: 'TOGGLE_END_GAME',
      payload: false
    }
  ) 
  ).toEqual({
    ...state,
    gameStarted: false
  })
})

test('SAVE_COUNT', () => {
  expect( store(
    state,
    {
      type: 'SAVE_COUNT',
      payload: 12
    }
  ) 
  ).toEqual({
    ...state,
    totalCount: 12
  })
})

test('SET_GAME_TIMER', () => {
  expect( store(
    state,
    {
      type: 'SET_GAME_TIMER',
      payload: 12
    }
  ) 
  ).toEqual({
    ...state,
    initialTime: 12
  })
})

test('SET_USER_PLACE', () => {
  expect( store(
    state,
    {
      type: 'SET_USER_PLACE',
      payload: 12
    }
  ) 
  ).toEqual({
    ...state,
    userPlace: 12
  })
})

test('SET_USER_NAME', () => {
  expect( store(
    state,
    {
      type: 'SET_USER_NAME',
      payload: 'xxxx'
    }
  ) 
  ).toEqual({
    ...state,
    userName: 'xxxx'
  })
})