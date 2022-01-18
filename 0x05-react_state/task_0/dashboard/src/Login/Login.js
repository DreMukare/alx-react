import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <>
      <div className={css(styles.appBody, styles.small)}>
        <h1>Log in to continue</h1>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input className={css(styles.noBorder)} type="email" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input className={css(styles.noBorder)} type="password" id="password" name="password" />
        <button className={css(styles.yellowBorder)}>OK</button>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  appBody: {
    minHeight: '50vh',
    textAlign: 'left',
    marginTop: '2rem',
    marginLeft: '2rem',
  },
  small: {
    '@media (max-width: 900px)': {
      display: 'grid',
      justifyContent: 'center',
    }
  },
  noBorder: {
    '@media (max-width: 900px)': {
      border: 'none'
    }
  },
  yellowBorder: {
    '@media (max-width: 900px)': {
      border: '2px solid gold',
      backgroundColor: 'transparent',
      width: '5vw'
    }
  }
})

export default Login;
