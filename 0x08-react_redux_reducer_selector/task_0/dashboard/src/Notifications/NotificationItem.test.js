import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('rendering components', () => {
  it('renders NotificationItem component without crashing', () => {
    const wrapper = shallow(<NotificationItem />);

    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct html from type="default" value="test" props', () => {
    const wrapper = shallow(<NotificationItem />);

    wrapper.setProps({ type: 'default', value: 'test' })
    expect(wrapper.html()).toEqual('<li data-notification-type=\"default\" class=\"default_peoly4\">test</li>');
  });

  it('renders correct html from  html="<u>test</u>" props', () => {
    const wrapper = shallow(<NotificationItem />);

    wrapper.setProps({ html: '<u>test</u>' })
    expect(wrapper.html()).toEqual('<li data-urgent=\"true\" class=\"urgent_5sww4x\"><u>test</u></li>');
  })

  it('checks component onClick spy is called with correct ID argument', () => {
    const wrapper = shallow(<NotificationItem />);
    const spy = jest.fn();

    wrapper.setProps({ value: 'test', markAsRead: spy, id: 99 })
    wrapper.find('li').props().onClick();
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(99);
    spy.mockRestore();
  })
});