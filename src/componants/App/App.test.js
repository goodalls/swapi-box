import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  /* eslint-disable */
  let mockEvent;
  /* eslint-enable */
  beforeEach(() => {
    wrapper = shallow(<App />);
    mockEvent = { preventDefault: jest.fn() };
  });

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('will call scrolling text to be called on componentDidMount', async () => {
    const scroll = await wrapper.instance().scrollingText();

    expect(scroll).toHaveBeenCalled();
  });

  it('should call loadStorageFavorites', () => {});

  describe('fetchCards', () => {
    it('should call api.peopleCards', () => {
      mockEvent = { preventDefault: jest.fn(), target: { name: 'people' } };
    });

    it('should call api.planetCards', () => {
      mockEvent = { preventDefault: jest.fn(), target: { name: 'planets' } };
    });

    it('should call api.vehicleCards', () => {
      mockEvent = { preventDefault: jest.fn(), target: { name: 'vehicles' } };
    });

    it('should set state with the array returned', () => {});

    it('should set active state name', () => {});
  });

  describe('addToFavorites', () => {
    it('should call this.testForFavorite', () => {});

    it('this.testForFavorite should return an array', () => {});

    it('should set favorite array to localStorage', () => {});

    it('should set favorite array to state ', () => {});
  });

  describe('renderFavorites', () => {
    it('should reset state.fetchedArray', () => {});
  });
});
