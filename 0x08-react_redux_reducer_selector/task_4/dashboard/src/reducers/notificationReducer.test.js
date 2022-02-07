import notificationReducer from './notificationReducer';
import {
	markAsRead,
	setNotificationFilter,
} from '../actions/notificationActionCreators';
import { Map } from 'immutable';

describe('notificationReducer', () => {
	it('Verifies default state returned', () => {
		const myState = notificationReducer(undefined, {});
		expect(myState.toJS()).toEqual({
			notifications: [],
			filter: 'DEFAULT',
		});
	});

	it('Verifies MARK_AS_READ returns the data passed', () => {
		const initialState = {
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
		const returnState = {
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
		const myState = notificationReducer(initialState, markAsRead(2));
		expect(myState.toJS()).toEqual(returnState);
	});

	it('Verifies SET_TYPE_FILTER returns the data passed', () => {
		const initialState = {
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
		const returnState = {
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
		const myState = notificationReducer(
			initialState,
			setNotificationFilter('URGENT')
		);
		expect(myState).toEqual(Map(returnState));
	});
});
