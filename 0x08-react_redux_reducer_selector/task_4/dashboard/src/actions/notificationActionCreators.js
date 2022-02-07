import {
	FETCH_NOTIFICATIONS_SUCCESS,
	MARK_AS_READ,
	SET_TYPE_FILTER,
} from './notificationActionTypes';

export const markAsRead = (index) => {
	return {
		type: MARK_AS_READ,
		index,
	};
};

export const boundMarkAsRead = (index) => dispatch(markAsRead(index));

export const setNotificationFilter = (filter) => {
	return {
		type: SET_TYPE_FILTER,
		filter,
	};
};

export const boundSetNotificationFilter = (filter) =>
	dispatch(setNotificationFilter(filter));

export function fetchNotificationsSuccess() {
	return {
		type: FETCH_NOTIFICATIONS_SUCCESS,
		data: [
			{
				id: 1,
				type: 'default',
				value: 'New course available',
			},
			{
				id: 2,
				type: 'urgent',
				value: 'New resume available',
			},
			{
				id: 3,
				type: 'urgent',
				value: 'New data available',
			},
		],
	};
}

export const boundFetchNotificationsSuccess = () =>
	dispatch(fetchNotificationsSuccess());
