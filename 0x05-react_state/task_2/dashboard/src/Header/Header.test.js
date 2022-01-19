/**
 * @jest-environment jsdom
 */
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';
import { shallow, mount } from 'enzyme';
import { AppContext, defaultUser, defaultLogout } from '../App/AppContext';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Tests for Header component', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(
			<AppContext.Provider>
				<Header />
			</AppContext.Provider>
		);

		expect(wrapper.exists()).toBe(true);
	});

	it('renders img and h1 tags', () => {
		const wrapper = mount(<Header />);

		expect(wrapper.exists('img')).toBe(true);
		expect(wrapper.exists('h1')).toBe(true);
	});
});

describe('context tests', () => {
	it('mounts with default context value and not create logoutSection', () => {
		const wrapper = mount(
			<AppContext.Provider value={{ user: defaultUser, logout: defaultLogout }}>
				<Header />
			</AppContext.Provider>
		);

		expect(wrapper.find('img')).toHaveLength(1);
		expect(wrapper.find('h1')).toHaveLength(1);
		expect(wrapper.find('#logoutSection').exists()).toBe(false);
	});

	it('should mount with defined user and create logoutSection', () => {
		const dummy = {
			email: 'fred@gmail.com',
			password: 'pass123',
			isLoggedIn: true,
		};
		const wrapper = mount(
			<AppContext.Provider value={{ user: dummy, logout: defaultLogout }}>
				<Header />
			</AppContext.Provider>
		);

		expect(wrapper.find('img')).toHaveLength(1);
		expect(wrapper.find('h1')).toHaveLength(1);
		expect(wrapper.find('#logoutSection').exists()).toBe(true);
	});

	it('should mount with defined user and call logOut when link is clicked', () => {
		const testData = {
			user: {
				email: 'fred@gmail.com',
				password: 'pass123',
				isLoggedIn: true,
			},
			logOut: () => {},
		};
		const spy = jest.spyOn(testData, 'logOut');
		const wrapper = mount(
			<AppContext.Provider value={testData}>
				<Header />
			</AppContext.Provider>
		);
		wrapper.find('#logoutSection a').simulate('click');
		expect(spy).toHaveBeenCalled();
		spy.mockRestore();
	});
});
