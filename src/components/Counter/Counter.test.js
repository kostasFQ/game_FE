import React from 'react';
import Counter from './component';
import renderer from 'react-test-renderer';

test('Counter should be render with 5 clicks', () => {
  const instance = renderer.create(
    <Counter title='Click Here!' clicks={ 5 } />
  );
  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})

test('Counter should be render with 10 clicks', () => {
  const instance = renderer.create(
    <Counter title='Click Here!' clicks={ 10 } />
  );
  let component = instance.toJSON();
  expect(component).toMatchSnapshot();
})