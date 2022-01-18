import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  small: {
    '@media (max-width: 900px)': {
      display: 'grid',
      justifyContent: 'center',
      width: '50%',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
})

export default class BodySection extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={css(styles.small)}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.propTypes = {
  title: PropTypes.string,
  // children: PropTypes.arrayOf(PropTypes.node)
}
