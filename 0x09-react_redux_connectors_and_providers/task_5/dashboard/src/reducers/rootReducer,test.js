import { initialRootState } from './rootReducer';
import { Map } from 'immutable';

describe('tests for rootReducer', () => {
	it('should have the right types for the initial state object', () => {
		expect(initialRootState.ui).toBeInstanceOf(Map);
		expect(initialRootState.courses).toBeInstanceOf(Map);
		expect(initialRootState.notifications).toBeInstanceOf(Map);
	});
});
