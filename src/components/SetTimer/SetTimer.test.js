import React from 'react';
import renderer from 'react-test-renderer';
import _store from '../../../mocks/store';
import SetTimer from './component';

const props = {
  game: {
    gameStarted: true,
    gameOver: true,
    initialTime: 10
  },
  seconds: [5, 10, 15, 30, 60],
  setGameTimer: jest.fn( () => {console.log('submit')} ) 
}

const instance = renderer.create(
  <SetTimer {...props} />
);

test('FinalCount should be render', () => {
  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})

test('Form submit', () => {
  const x = instance.root;
  const form = x.findByType('form')
  const e ={ target: { value: 10 } }
  form.props.onClick(e);
  expect(props.setGameTimer).toHaveBeenCalled()
})