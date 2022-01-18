import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';
import { shallow } from 'enzyme';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('rendering components', () => {
  it('renders Header component without crashing', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.exists()).toBe(true);
  });

  it('Header renders img and h1 tags', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.exists('img')).toBe(true);
    expect(wrapper.exists('h1')).toBe(true);
  })
});