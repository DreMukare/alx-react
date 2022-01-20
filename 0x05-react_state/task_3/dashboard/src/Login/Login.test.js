import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';
import { shallow } from 'enzyme';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('rendering components', () => {
	it('renders Login component without crashing', () => {
		const wrapper = shallow(<Login />);

		expect(wrapper.exists()).toBe(true);
	});

	it('Login component renders 2 <input> and 2 <label> tags', () => {
		const wrapper = shallow(<Login />);

		expect(wrapper.find('label')).toHaveLength(2);
		expect(wrapper.find('input')).toHaveLength(3);
	});
});

describe('test for submit input on form', () => {
	it('should be disabled by default', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find('.yellowBorder_1sbjbp4').props().disabled).toBe(true);
	});

	it('should be enabled when password and email have value', () => {
		const wrapper = shallow(<Login />);
		const email = {
			target: {
				name: 'email',
				value: 'email',
			},
		};
		const password = {
			target: {
				name: 'password',
				value: 'password',
			},
		};

		wrapper.find({ name: 'email' }).simulate('change', email);
		wrapper.find({ name: 'password' }).simulate('change', password);
		expect(wrapper.find('.yellowBorder_1sbjbp4').prop('disabled')).toBe(false);
	});
});
