import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  let mockFav;
  let mockFavArray;
  let wrapper;

  beforeEach(() => {
    mockFav = {name: 'george'};
    mockFavArray = [{name: 'jefferson'}];
    wrapper = shallow(<Card favorite={mockFav} favorites={mockFavArray}/>);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should add favorited to class', () => {
    mockFavArray = [{ name: 'george' }];
    expect(wrapper).toMatchSnapshot();
  });
});
