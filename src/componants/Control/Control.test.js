import React from 'react';
import Control from './Control';
import { shallow } from 'enzyme';

describe('Control', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Control />);
    expect(wrapper).toMatchSnapshot();
  });
});
