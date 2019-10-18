import React from 'react';
import Button from './component';
import renderer from 'react-test-renderer';

test('Button should be render', async () => {
  const button = await renderer.create(
    <Button title='Start' disabled={true} onClick={ () => {} } />
  );
  let component = button.toJSON();
  expect(component).toMatchSnapshot();
})