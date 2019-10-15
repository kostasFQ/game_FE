import React from 'react';
import NotFoundPage from './NotFoundPage';
import renderer from 'react-test-renderer';

test('NotFoundPage should be render', () => {
  const button = renderer.create(
    <NotFoundPage />
  );
  let component = button.toJSON();
  expect(component).toMatchSnapshot();
})