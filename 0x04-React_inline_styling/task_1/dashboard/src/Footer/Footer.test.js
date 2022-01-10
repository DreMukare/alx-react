import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Footer test', () => {
	it('should render without crashing', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.exists()).toEqual(true);
	});
	it('should render the text Copyright', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.text()).toEqual(
			`Copyright ${getFullYear()} - ${getFooterCopy(true)}`
		);
	});
});
