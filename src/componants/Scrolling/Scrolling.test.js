import React from 'react';
import ReactDOM from 'react-dom';
import Scrolling from './Scrolling';

describe('Scrolling', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Scrolling />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
