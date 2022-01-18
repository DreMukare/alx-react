import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import holberton_logo from '../assets/holberton_logo.jpeg';

const Header = () => {
  return (
    <div className={css(styles.header)}>
      <img src={holberton_logo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    '@media (max-width: 900px)': {
      justifyContent: 'center'
    }
  },
  title: {
    color: 'red'
  },
  logo: {
    height: '100px',
    width: '100px'
  }
})

export default Header;
