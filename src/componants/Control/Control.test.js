import React from 'react';
import ReactDOM from 'react-dom';
import Control from './Control';

describe('Control', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Control />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
