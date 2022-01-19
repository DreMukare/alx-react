import React from 'react';
import Footer from './Footer';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { shallow } from 'enzyme';

describe('rendering components', () => {
  it('renders Footer component without crashing', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.exists()).toBe(true);
  });

  it('Footer component renders "Copyright ${getFullYear()} - ${getFooterCopy(true)}"', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('.footer').text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy(true)}`);
  });
});