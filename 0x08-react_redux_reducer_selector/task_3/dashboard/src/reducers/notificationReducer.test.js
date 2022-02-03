import {
	markAsRead,
	setNotificationFilter,
	fetchNotificationsSuccess,
} from '../actions/notificationActionCreators';
import { notificationReducer } from './notificationReducer';

describe('tests for notification reducer', () => {
	const defaultState = {
		notifications: [],
		filter: 'DEFAULT',
	};

	it('should return default state when no action is passed', () => {
		expect(notificationReducer(defaultState, 'null')).toEqual(defaultState);
	});

	it('should mark the correct notification as read', () => {
		const data = {
			filter: 'DEFAULT',
			notifications: [
				{
					id: 1,
					isRead: false,
					type: 'default',
					value: 'New course available',
				},
				{
					id: 2,
					isRead: false,
					type: 'urgent',
					value: 'New resume available',
				},
				{
					id: 3,
					isRead: false,
					type: 'urgent',
					value: 'New data available',
				},
			],
		};

		const output = {
			filter: 'DEFAULT',
			notifications: [
				{
					id: 1,
					isRead: false,
					type: 'default',
					value: 'New course available',
				},
				{
					id: 2,
					isRead: true,
					type: 'urgent',
					value: 'New resume available',
				},
				{
					id: 3,
					isRead: false,
					type: 'urgent',
					value: 'New data available',
				},
			],
		};

		expect(notificationReducer(data, markAsRead(2))).toEqual(output);
	});

	it('should change filter', () => {
		const data = {
			filter: 'DEFAULT',
			notifications: [
				{
					id: 1,
					isRead: false,
					type: 'default',
					value: 'New course available',
				},
				{
					id: 2,
					isRead: false,
					type: 'urgent',
					value: 'New resume available',
				},
				{
					id: 3,
					isRead: false,
					type: 'urgent',
					value: 'New data available',
				},
			],
		};

		const output = {
			filter: 'URGENT',
			notifications: [
				{
					id: 1,
					isRead: false,
					type: 'default',
					value: 'New course available',
				},
				{
					id: 2,
					isRead: false,
					type: 'urgent',
					value: 'New resume available',
				},
				{
					id: 3,
					isRead: false,
					type: 'urgent',
					value: 'New data available',
				},
			],
		};

		expect(notificationReducer(data, setNotificationFilter('URGENT'))).toEqual(
			output
		);
	});

	it('should return correct state on successful fetch', () => {
		const data = {
			filter: 'DEFAULT',
			notifications: [
				{
					id: 1,
					isRead: false,
					type: 'default',
					value: 'New course available',
				},
				{
					id: 2,
					isRead: false,
					type: 'urgent',
					value: 'New resume available',
				},
				{
					id: 3,
					isRead: false,
					type: 'urgent',
					value: 'New data available',
				},
			],
		};

		expect(
			notificationReducer(defaultState, fetchNotificationsSuccess())
		).toEqual(data);
	});
});
