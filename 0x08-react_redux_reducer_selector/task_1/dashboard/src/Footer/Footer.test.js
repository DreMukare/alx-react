/**
 * @jest-environment jsdom
 */
import React from 'react';
import Footer from './Footer';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { shallow, mount } from 'enzyme';
import { AppContext } from '../App/AppContext';

describe('rendering components', () => {
	it('renders Footer component without crashing', () => {
		const wrapper = shallow(<Footer />);

		expect(wrapper.exists()).toBe(true);
	});

	it('Footer component renders "Copyright ${getFullYear()} - ${getFooterCopy(true)}"', () => {
		const wrapper = mount(<Footer />);

		expect(wrapper.find('.footer').text()).toEqual(
			`Copyright ${getFullYear()} - ${getFooterCopy(true)}`
		);
	});

	it('only renders link when user is logged in', () => {
		const testData = {
			user: { email: 'fred@gmail.com', password: 'pass123', isLoggedIn: true },
			logOut: () => {},
		};
		const wrapper = mount(
			<AppContext.Provider value={testData}>
				<Footer />
			</AppContext.Provider>
		);

		expect(wrapper.find('.footer a').exists()).toBe(true);
	});

	it('does not render link when user is logged out', () => {
		const testData = {
			user: { email: 'fred@gmail.com', password: 'pass123', isLoggedIn: false },
			logOut: () => {},
		};
		const wrapper = mount(
			<AppContext.Provider value={testData}>
				<Footer />
			</AppContext.Provider>
		);

		expect(wrapper.find('.footer a').exists()).toBe(false);
	});
});
