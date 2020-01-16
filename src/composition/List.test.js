import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
import STORE from '../store';

//smoke test for List component
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List header="list header" cardIds={['a', 'b', 'c']} allCards={STORE.allCards}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

// snapshot test for List component
it('renders the UI as expected', () => {
  const tree = renderer
    .create(<List header="list header" cardIds={['a', 'b', 'c']} allCards={STORE.allCards} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});