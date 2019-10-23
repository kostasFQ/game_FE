import React from 'react';
import Button from './index';
import renderer from 'react-test-renderer';

test('Button should be render', async () => {
  const instance = await renderer.create(
    <Button title='Start' disabled={true} onClick={() => { }} />
  );
  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})

test('Button click', async () => {
  const instance = await renderer.create(
    <Button title='Start' disabled={true} onClick={ () => {} } />
  );
  const testInstance = instance.root;
  const button = testInstance.findByType('button');
  const buttonClick = jest.fn(() => button.props.onClick());
  buttonClick();
  expect(buttonClick).toHaveBeenCalled();
})