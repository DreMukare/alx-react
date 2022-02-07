import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection';

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px'
  }
})

export default class BodySectionWithMarginBottom extends Component {
  render() {
    const { children } = this.props
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection />
        {children}
      </div>
    );
  }
}