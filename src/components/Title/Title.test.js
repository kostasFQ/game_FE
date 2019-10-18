import React from 'react';
import Title from './component';
import renderer from 'react-test-renderer';

test('Button should be render', async () => {
  const instance = await renderer.create(
    <Title />
  );
  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})