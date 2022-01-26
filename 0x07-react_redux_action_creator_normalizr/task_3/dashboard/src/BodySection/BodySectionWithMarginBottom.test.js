import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<BodySection />', () => {
  it('renders a BodySection component', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom >
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toBe('test children node');

    // let containerStyle = wrapper.get(0).style;
    // expect(containerStyle).toHaveProperty('margin-bottom', '40px');
    // expect(wrapper.find('.bodySectionWithMargin')).toHaveProperty('margin-bottom', '40px');
    // expect(wrapper.find('.bodySectionWithMargin')).toBeDefined();
  });
})
