import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

//smoke test for Card component
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card title="card title" content="card content"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

//snapshot test for Card component
it('renders the UI as expected', () => {
  const tree = renderer
    .create(<Card title="card title" content="card content"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});