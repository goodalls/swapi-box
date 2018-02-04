import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  let mockFav;
  let mockFavArray;
  let wrapper;

  beforeEach(() => {
    mockFav = { name: 'george' };
    mockFavArray = [{ name: 'jefferson' }];
    wrapper = shallow(<Card favorite={mockFav} favorites={mockFavArray} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should add favorited to class', () => {
    mockFavArray = [{ name: 'george' }];
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot of people card', () => {
    mockFav = { name: 'george', species: 'human' };
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot of planet card', () => {
    mockFav = { name: 'george', terrain: 'desert' };
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot of vehicle card', () => {
    mockFav = { name: 'george', model: '22 speeder' };
    expect(wrapper).toMatchSnapshot();
  });
});
