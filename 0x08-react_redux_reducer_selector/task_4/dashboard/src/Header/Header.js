import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import holberton_logo from '../assets/holberton_logo.jpeg';
import { AppContext } from '../App/AppContext';

class Header extends React.Component {
	render() {
		const data = this.context;
		return (
			<React.Fragment>
				<div className={css(styles.header)}>
					<img src={holberton_logo} className={css(styles.logo)} alt='logo' />
					<h1 className={css(styles.title)}>School dashboard</h1>
				</div>
				{data.user.isLoggedIn && (
					<div className={css(styles.greeting)} id='logoutSection'>
						Welcome {data.user.email}{' '}
						<a className={css(styles.logout)} onClick={data.logOut}>
							(logout)
						</a>
					</div>
				)}
			</React.Fragment>
		);
	}
}

Header.contextType = AppContext;

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		alignItems: 'center',
		fontSize: 'calc(10px + 2vmin)',
		color: 'white',
		'@media (max-width: 900px)': {
			justifyContent: 'center',
		},
	},
	title: {
		color: 'red',
	},
	logo: {
		height: '100px',
		width: '100px',
	},
	greeting: {
		marginTop: '1rem',
	},
	logout: {
		cursor: 'pointer',
	},
});

export default Header;
