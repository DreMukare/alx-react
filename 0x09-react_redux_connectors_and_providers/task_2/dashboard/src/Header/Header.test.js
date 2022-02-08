import { shallow, mount } from 'enzyme';
import React from 'react';
import { Header } from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext, { user, logOut } from '../App/AppContext';

const USER = { email: 'michael@mifflin.com', password: 'pippity' };

describe('<Header />', () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});
	afterAll(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});

	it('Header renders without crashing', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.exists()).toEqual(true);
	});
	it('verifies that the components render img', () => {
		const wrapper = shallow(<Header user={USER} />);
		wrapper.update();
		expect(wrapper.find('div img')).toHaveLength(1);
	});
	it('verifies that the components render h1', () => {
		const wrapper = shallow(<Header user={USER} />);
		wrapper.update();
		expect(wrapper.find('div h1')).toHaveLength(1);
	});

	it('mounts the Header component with a default context value. The logoutSection is not created', () => {
		const wrapper = shallow(<Header />);

		expect(wrapper.find('#logoutSection')).toHaveLength(0);
	});

	it('mounts the Header component with a user defined (isLoggedIn is true and an email is set). The logoutSection is created', () => {
		const wrapper = shallow(<Header user={USER} />);

		expect(wrapper.find('#logoutSection')).toHaveLength(1);
	});
});
