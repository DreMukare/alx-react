import {
	filterTypeSelected,
	getNotifications,
	getUnreadNotifications,
} from './notificationSelector';
import { markAsRead } from '../actions/notificationActionCreators';
import notificationReducer from '../reducers/notificationReducer';
import { notificationsNormalizer } from '../schema/notifications';
import { Map } from 'immutable';

const initialState = Map({
	notifications: [],
	filter: 'DEFAULT',
});

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

describe('tests for notificationSelector', () => {
	it('returns filter as expected', () => {
		const filter = filterTypeSelected(initialState);
		expect(filter).toEqual('DEFAULT');
	});

	it('returns notifications as expected', () => {
		const notifications = notificationsNormalizer(returnState);
		expect(getNotifications(notifications)).toEqual(
			notifications.notifications
		);
	});

	// it('returns only read notifications', () => {
	// 	const oneReadNotification = notificationReducer(returnState, markAsRead(1));
	// 	expect(getUnreadNotifications(oneReadNotification)).toEqual(
	// 		oneReadNotification.filter((notification) => !notification.isRead)
	// 	);
	// });
});
// Map(notifications.getIn(['notifications', 'entities', 'notifications']))
