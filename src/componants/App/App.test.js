import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let mockEvent;
  let renderedComponent;
  let mockFetch;
  let mockFunction;

  beforeAll(() => {
    mockFunction = jest.fn();
    mockEvent = { preventDefault: jest.fn() };
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        crawl: {}
      })
    }));
  });

  beforeEach(() => {
    renderedComponent = shallow(<App />);
  });

  it.skip('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('will call scrolling text', async () => {
    await renderedComponent.instance().scrollingText();
    await renderedComponent.update();
    expect(renderedComponent.scrollingText).toHaveBeenCalled();
    
  });

});
