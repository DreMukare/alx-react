import courseReducer from './courseReducer';
import {
	fetchCourseSuccess,
	selectCourse,
	unSelectCourse,
} from '../actions/courseActionCreators';
import { fromJS, Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

describe('courseReducer', () => {
	it('Verifies default state returns an empty array', () => {
		const myState = courseReducer([], '');
		expect(myState).toEqual(Map([]));
	});

	it('Verifies FETCH_COURSE_SUCCESS returns the data passed', () => {
		const returnState = [
			{
				id: 1,
				name: 'ES6',
				isSelected: false,
				credit: 60,
			},
			{
				id: 2,
				name: 'Webpack',
				isSelected: false,
				credit: 20,
			},
			{
				id: 3,
				name: 'React',
				isSelected: false,
				credit: 40,
			},
		];

		const myState = courseReducer([], fetchCourseSuccess());
		expect(myState.toJS()).toEqual(coursesNormalizer(returnState));
	});

	it('Verifies SELECT_COURSE returns the data with the right item updated', () => {
		const initialState = [
			{
				id: 1,
				name: 'ES6',
				isSelected: false,
				credit: 60,
			},
			{
				id: 2,
				name: 'Webpack',
				isSelected: false,
				credit: 20,
			},
			{
				id: 3,
				name: 'React',
				isSelected: false,
				credit: 40,
			},
		];
		const returnState = [
			{
				id: 1,
				name: 'ES6',
				isSelected: false,
				credit: 60,
			},
			{
				id: 2,
				name: 'Webpack',
				isSelected: true,
				credit: 20,
			},
			{
				id: 3,
				name: 'React',
				isSelected: false,
				credit: 40,
			},
		];
		const myState = courseReducer(
			fromJS(coursesNormalizer(initialState)),
			selectCourse(2)
		);
		expect(myState.toJS()).toEqual(coursesNormalizer(returnState));
	});

	it('should returns the data with the right course property isSelected === false for UNSELECT_COURSE', () => {
		const initialState = [
			{
				id: 1,
				name: 'ES6',
				isSelected: false,
				credit: 60,
			},
			{
				id: 2,
				name: 'Webpack',
				isSelected: true,
				credit: 20,
			},
			{
				id: 3,
				name: 'React',
				isSelected: false,
				credit: 40,
			},
		];
		const returnState = [
			{
				id: 1,
				name: 'ES6',
				isSelected: false,
				credit: 60,
			},
			{
				id: 2,
				name: 'Webpack',
				isSelected: false,
				credit: 20,
			},
			{
				id: 3,
				name: 'React',
				isSelected: false,
				credit: 40,
			},
		];
		const myState = courseReducer(
			fromJS(coursesNormalizer(initialState)),
			unSelectCourse(2)
		);
		expect(myState.toJS()).toEqual(coursesNormalizer(returnState));
	});
});
