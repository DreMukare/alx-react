import React, { Component } from 'react';

export default function WithLogging(WrappedComponent) {
  class WithLogging extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent} is mounted`)
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent} is going to unmount`)
    }

    render() {
      return <WrappedComponent />;
    }
  }
  WithLogging.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;
  return WithLogging;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}