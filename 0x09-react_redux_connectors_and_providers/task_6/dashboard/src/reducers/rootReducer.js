import courseReducer, { initialCourseState } from './courseReducer';
import notificationReducer, {
	initialNotificationState,
} from './notificationReducer';
import uiReducer, { initialUIState } from './uiReducer';
import { Map } from 'immutable';

export const initialRootState = {
	courses: Map(initialCourseState),
	notifications: Map(initialNotificationState),
	ui: Map(initialUIState),
};

const rootReducer = {
	courses: courseReducer,
	notifications: notificationReducer,
	ui: uiReducer,
};

export default rootReducer;
