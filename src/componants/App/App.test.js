import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


describe('App', () => {
  let mockEvent;
  let wrapper;
  let mockFetch;
  let mockFunction;

  beforeAll(() => {
    mockFunction = jest.fn();
    mockEvent = { preventDefault: jest.fn() };
  });

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('will call scrolling text', async () => {
    const scroll = await wrapper.instance().scrollingText();
   
    expect(scroll).toHaveBeenCalled();
    
  });

});
