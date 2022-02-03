import uiReducer, { defaultState } from './uiReducer';
import { selectCourse } from '../actions/courseActionCreators';
import { displayNotificationDrawer } from '../actions/uiActionCreators';

describe('uiReducer', () => {
	it('Verifies initial state returned when no action is passed to uiReducer', () => {
		const myState = uiReducer(defaultState, '');
		expect(myState.toJS()).toEqual(defaultState.toJS());
	});

	it('Verifies the state equals the initial state when the action SELECT_COURSE is passed', () => {
		const myState = uiReducer(defaultState, selectCourse());
		expect(myState.toJS()).toEqual(defaultState.toJS());
	});

	it('Verifies property isNotificationDrawerVisible is true when DISPLAY_NOTIFICATION_DRAWER passed', () => {
		const myState = uiReducer(defaultState, displayNotificationDrawer());
		expect(myState.toJS().isNotificationDrawerVisible).toEqual(true);
	});
});
