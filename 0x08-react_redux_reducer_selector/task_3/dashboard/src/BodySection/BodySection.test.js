import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<BodySection />', () => {
  it('renders an <h2> element and children', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>);

    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toBe('test title');
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toBe('test children node');
  });
})
