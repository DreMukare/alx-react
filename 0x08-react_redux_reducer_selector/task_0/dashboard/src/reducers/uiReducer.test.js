import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { SELECT_COURSE } from '../actions/courseACtionTypes';

describe('tests for uiReducer', () => {
	const defaultState = {
		isNotificationDrawerVisible: false,
		isUserLoggedIn: false,
		user: {},
	};

	it('should return initial state when no action is passed', () => {
		expect(uiReducer(defaultState, 'null')).toEqual(defaultState);
	});

	it('should return initial state when wrong action is passed', () => {
		expect(uiReducer(defaultState, { type: SELECT_COURSE })).toEqual(
			defaultState
		);
	});

	it('should change state correctly when action is passed', () => {
		expect(
			uiReducer(defaultState, { type: DISPLAY_NOTIFICATION_DRAWER })
		).toEqual({ ...defaultState, isNotificationDrawerVisible: true });
	});
});
