import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Login />', () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});
	afterAll(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});

	it('Login renders without crashing', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.exists()).toEqual(true);
	});
	it('verifies that the components render 3 input', () => {
		const wrapper = shallow(<Login />);
		wrapper.update();
		expect(wrapper.find('div input')).toHaveLength(3);
	});
	it('verifies that the components render 2 label', () => {
		const wrapper = shallow(<Login />);
		wrapper.update();
		expect(wrapper.find('div label')).toHaveLength(2);
	});

	it('verifies that the components render 2 label', () => {
		const wrapper = shallow(<Login />);
		const submitInput = wrapper.find("form input[type='submit']");

		expect(submitInput).toHaveLength(1);
		expect(submitInput.prop('disabled')).toEqual(true);
	});

	it('verifies that the components render 2 label', () => {
		const wrapper = shallow(<Login />);
		const emailInput = wrapper.find('#email');
		const passwordInput = wrapper.find('#password');

		emailInput.simulate('change', {
			target: { name: 'email', value: 'michael@mifflin.com' },
		});

		let submitInput = wrapper.find("form input[type='submit']");

		expect(submitInput.prop('disabled')).toEqual(true);

		passwordInput.simulate('change', {
			target: { name: 'password', value: 'pippity' },
		});

		submitInput = wrapper.find("form input[type='submit']");
		expect(submitInput.prop('disabled')).toEqual(false);
	});
});
