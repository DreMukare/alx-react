import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('rendering CourseListRow', () => {
  it('checks when isHeader is true and textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='Foo' />);

    expect(wrapper.find('tr').children()).toHaveLength(1);
    expect(wrapper.find('tr').childAt(0).html()).toEqual('<th colSpan=\"2\">Foo</th>')
  });

  it('checks when isHeader is true and textSecondCell exists', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='Foo' textSecondCell='Bar' />);

    expect(wrapper.find('tr').children()).toHaveLength(2);
    expect(wrapper.find('tr').childAt(0).html()).toEqual('<th class=\"cell_q0yd4b\">Foo</th>')
    expect(wrapper.find('tr').childAt(1).html()).toEqual('<th class=\"cell_q0yd4b\">Bar</th>')
  });

  it('checks when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='Foo' textSecondCell='Bar' />);
    expect(wrapper.find('tr').children()).toHaveLength(2);
    expect(wrapper.find('tr').childAt(0).html()).toEqual('<td class=\"cell_q0yd4b\">Foo</td>')
    expect(wrapper.find('tr').childAt(1).html()).toEqual('<td class=\"cell_q0yd4b\">Bar</td>')
  })
})