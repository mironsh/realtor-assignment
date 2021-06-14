import React from 'react';
import renderer from 'react-test-renderer';
import Property from './Property';

test('Test Property component', () => {
  const component = renderer.create(
    <Property title={"test title"} data={<span>test data</span>} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});