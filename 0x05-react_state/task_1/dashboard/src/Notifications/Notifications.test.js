import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import { shallow } from 'enzyme';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('rendering components', () => {
	it('renders Notifications component without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBe(true);
	});

	it('renders an unordered list', () => {
		const listNotifications = [
			{ id: 1, type: 'default', value: 'New course available' },
			{ id: 2, type: 'urgent', value: 'New resume available' },
			{ id: 3, type: 'default', html: getLatestNotification() },
		];

		const wrapper = shallow(
			<Notifications
				displayDrawer={true}
				listNotifications={listNotifications}
			/>
		);
		expect(wrapper.find('ul').children()).toHaveLength(3);
		wrapper.find('ul').forEach((node) => {
			expect(node.equals(<NotificationItem />));
		});
	});

	it('renders the right html', () => {
		const listNotifications = [
			{ id: 1, type: 'default', value: 'New course available' },
			{ id: 2, type: 'urgent', value: 'New resume available' },
			{ id: 3, type: 'default', html: getLatestNotification() },
		];

		const wrapper = shallow(
			<Notifications
				displayDrawer={true}
				listNotifications={listNotifications}
			/>
		);

		expect(wrapper.find('ul').childAt(0).html()).toEqual(
			'<li data-notification-type="default" class="default_peoly4">New course available</li>'
		);
		expect(wrapper.find('ul').childAt(1).html()).toEqual(
			'<li data-notification-type="urgent" class="urgent_5sww4x">New resume available</li>'
		);
		expect(wrapper.find('ul').childAt(2).html()).toEqual(
			`<li data-urgent=\"true\" class=\"urgent_5sww4x\">${getLatestNotification()}</li>`
		);
	});

	it('renders the text "Here is the list of notifications"', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('.center_14klam').text()).toBe(
			'Here is the list of notifications'
		);
	});

	it('check that the menu item is being displayed when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications />);
		const re = /menuItem.*/gm;

		expect(wrapper.childAt(0).hasClass(re)).toEqual(true);
	});

	it('check that the div.Notifications is not being displayed when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications />);

		expect(
			wrapper.find('.Notifications_pbqhv6-o_O-noBorder_5s9902').exists()
		).toEqual(false);
	});

	it('check that the menu item is not being displayed when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);

		expect(
			wrapper.find('.menuItem_1ba569s-o_O-hover_1f7q9uc').exists()
		).toEqual(false);
	});

	it('check that the div.Notifications is being displayed when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);

		expect(
			wrapper.find('.Notifications_pbqhv6-o_O-noBorder_5s9902').exists()
		).toEqual(true);
	});

	it('checks Notifications renders correctly if passed an empty array or listNotifications not passed', () => {
		const wrapper = shallow(
			<Notifications displayDrawer={true} listNotifications={[]} />
		);

		expect(wrapper.find('ul').childAt(0).html()).toEqual(
			'<li data-notification-type="default" class="default_peoly4">No new notification for now</li>'
		);
	});

	it('checks when markAsRead called, console.log called with `Notification ${id} has been marked as read`', () => {
		const wrapper = shallow(<Notifications />);
		const spy = jest.spyOn(console, 'log').mockImplementation();

		wrapper.instance().markAsRead = spy;
		wrapper.instance().markAsRead(1);
		expect(wrapper.instance().markAsRead).toBeCalledWith(1);
		expect(spy).toBeCalledTimes(1);
		expect(spy).toBeCalledWith(1);
		spy.mockRestore();
	});

	it('checks <Notifications /> doesn’t rerender when updating the props of the component with the same list', () => {
		const listNotifications = [
			{ id: 1, type: 'default', value: 'New course available' },
			{ id: 2, type: 'urgent', value: 'New resume available' },
			{ id: 3, type: 'default', html: getLatestNotification() },
		];
		const wrapper = shallow(
			<Notifications
				displayDrawer={true}
				listNotifications={listNotifications}
			/>
		);
		const spy = jest.spyOn(wrapper.instance(), 'shouldComponentUpdate');

		wrapper.setProps(listNotifications);
		expect(spy).toReturnWith(false);
		spy.mockRestore();
	});

	it('checks <Notifications /> rerenders when updating the props of the component with a longer list', () => {
		const listNotifications = [
			{ id: 1, type: 'default', value: 'New course available' },
			{ id: 2, type: 'urgent', value: 'New resume available' },
			{ id: 3, type: 'default', html: getLatestNotification() },
		];
		const newNotifications = [
			{ id: 1, type: 'default', value: 'New course available' },
			{ id: 2, type: 'urgent', value: 'New resume available' },
			{ id: 3, type: 'default', html: getLatestNotification() },
			{ id: 4, type: 'default', value: 'Foo' },
		];
		const wrapper = shallow(
			<Notifications listNotifications={listNotifications} />
		);

		expect(wrapper.instance().shouldComponentUpdate(newNotifications)).toBe(
			true
		);
	});

	it('should call handleDisplayDrawer when menu item clicked', () => {
		const listNotifications = [
			{ id: 1, type: 'default', value: 'New course available' },
			{ id: 2, type: 'urgent', value: 'New resume available' },
			{ id: 3, type: 'default', html: getLatestNotification() },
		];
		const mockFn = jest.fn();
		const wrapper = shallow(
			<Notifications
				listNotifications={listNotifications}
				handleDisplayDrawer={mockFn}
			/>
		);
		const spy = jest.spyOn(wrapper.instance().props, 'handleDisplayDrawer');

		wrapper.find('.menuItem_1ba569s-o_O-hover_1f7q9uc').simulate('click');
		expect(spy).toBeCalled();
		spy.mockRestore();
	});

	it('should call handleHideDrawer when close button is clicked', () => {
		const listNotifications = [
			{ id: 1, type: 'default', value: 'New course available' },
			{ id: 2, type: 'urgent', value: 'New resume available' },
			{ id: 3, type: 'default', html: getLatestNotification() },
		];
		const mockFn = jest.fn();
		const wrapper = shallow(
			<Notifications
				displayDrawer={true}
				listNotifications={listNotifications}
				handleHideDrawer={mockFn}
			/>
		);
		const spy = jest.spyOn(wrapper.instance().props, 'handleHideDrawer');
		wrapper.find('button').simulate('click');

		expect(spy).toBeCalled();
		spy.mockRestore();
	});
});
