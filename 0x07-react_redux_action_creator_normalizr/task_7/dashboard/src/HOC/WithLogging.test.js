import React, { Component } from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

describe('<withLogging /> higher oder component', () => {
  it('checks console.log called on mount and unmount', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    const NewComponent = WithLogging(Component);
    const wrapper = shallow(<NewComponent />)

    expect(spy).toBeCalledTimes(1);
    wrapper.unmount();
    expect(spy).toBeCalledTimes(2);
    spy.mockRestore();
  })

  it('checks console.log called on mount and unmount', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    const NewComponent = WithLogging('Login');
    const wrapper = shallow(<NewComponent />)

    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(`Component Login is mounted`);

    wrapper.unmount();
    expect(spy).toBeCalledWith(`Component Login is going to unmount`);
    expect(spy).toBeCalledTimes(2);

    spy.mockRestore();
  })
})