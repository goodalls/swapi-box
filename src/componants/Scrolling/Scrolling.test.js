import React from 'react';
import Scrolling from './Scrolling';
import { shallow } from 'enzyme';

describe('Scrolling', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Scrolling />);
    expect(wrapper).toMatchSnapshot();
  });
});
