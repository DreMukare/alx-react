import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging tests', () => {
	it('should call console.log on mount and dismount', () => {
		const spy = jest.spyOn(console, 'log').mockImplementation();
		const NewComponent = WithLogging(Component);
		const wrapper = shallow(<NewComponent />);

		expect(spy).toBeCalledTimes(1);
		wrapper.unmount();
		expect(spy).toBeCalledTimes(2);
		spy.mockRestore();
	});

	it('should log out the right message on mount and dismount', () => {
		const spy = jest.spyOn(console, 'log').mockImplementation();
		const NewComponent = WithLogging('Test');
		const wrapper = shallow(<NewComponent />);

		expect(spy).toBeCalledTimes(1);
		expect(spy).toBeCalledWith('Component Test is mounted');
		wrapper.unmount();
		expect(spy).toHaveBeenCalledTimes(2);
		expect(spy).toBeCalledWith('Component Test is going to unmount');
		spy.mockRestore();
	});
});
