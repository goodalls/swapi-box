import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('api', () => {
  beforeEach(() => {
    renderedComponent = shallow(<App />);
  });

  it.skip('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
