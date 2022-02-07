import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseList from './CourseList';
import { shallow } from 'enzyme';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('rendering CourseList component', () => {
  it('renders Courselist component without crashing', () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.exists()).toBe(true);
  });

  it('renders 5 different rows', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    expect(wrapper.find('thead').children()).toHaveLength(2);
    expect(wrapper.find('tbody').children()).toHaveLength(3);
  });

  // it('checks Notifications renders correctly if passed an empty array or listNotifications not passed', () => {
  //   const wrapper = shallow(<CourseList listCourses={[]} />);

  //   expect(wrapper.find('tbody').childAt(0).text()).toEqual('No course available yet');
  // });
})