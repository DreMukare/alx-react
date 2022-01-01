import React from 'react';
import { shallow } from 'enzyme';
import { getLatestNotification } from '../utils/utils';
import Notifications from './Notifications';

describe('Notification tests', () => {
	it('renders Notification component without crashing', () => {
		const component = shallow(<Notifications />);

		expect(component).toBeDefined();
	});

	it('renders an unordered list', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('ul').children()).toHaveLength(3);
		expect(wrapper.find('ul').childAt(0).html()).toEqual(
			'<li data="default">New course available</li>'
		);
		expect(wrapper.find('ul').childAt(1).html()).toEqual(
			'<li data="urgent">New resume available</li>'
		);
		expect(wrapper.find('ul').childAt(2).html()).toEqual(
			`<li data=\"urgent\">${getLatestNotification()}</li>`
		);
	});

	it('renders three list items', () => {
		const component = shallow(<Notifications />);

		expect(component.find('li')).toHaveLength(3);
	});

	it('renders correct text', () => {
		const component = shallow(<Notifications />);

		expect(component.find('p').prop('children')).toBe(
			'Here is the list of notifications'
		);
	});
});
