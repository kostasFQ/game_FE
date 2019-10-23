import React from 'react';
import MainButton from './index';
import renderer from 'react-test-renderer';

test('MainButton should be render', async () => {
  const button = await renderer.create(
    <MainButton title='Click Here!' onClick={() => { }} />
  );
  let component = button.toJSON();
  expect(component).toMatchSnapshot();
})