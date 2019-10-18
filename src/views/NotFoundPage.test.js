import React from 'react';
import NotFoundPage from './NotFoundPage';
import renderer from 'react-test-renderer';

test('NotFoundPage should be render', async () => {
  const button = await renderer.create(
    <NotFoundPage />
  );
  
  let component = button.toJSON();
  expect(component).toMatchSnapshot();
})