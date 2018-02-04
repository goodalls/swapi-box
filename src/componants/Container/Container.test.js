import React from 'react';
import Container from './Container';
import { shallow } from 'enzyme';

describe('Container', () => {
  let mockArray;
  let wrapper;

  beforeEach('', () => {
    mockArray = [{}];
    wrapper = shallow(<Container dataArray={mockArray} favorites={mockArray} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should favoriteCheck', () => {
    wrapper = shallow(<Container dataArray={[]} favorites={[{}, {}]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
