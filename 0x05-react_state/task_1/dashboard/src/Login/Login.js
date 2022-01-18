import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.state = {
			isLoggedIn: false,
			email: '',
			password: '',
			enableSubmit: false,
		};
	}

	handleLoginSubmit(e) {
		e.preventDefault();
		this.setState({ isLoggedIn: true });
	}

	handleChangeEmail(event) {
		this.setState({ email: event.target.value });
		this.state.email !== '' && this.state.password !== ''
			? this.setState({ enableSubmit: true })
			: this.setState({ enableSubmit: false });
	}

	handleChangePassword(event) {
		this.setState({ password: event.target.value });
		this.state.email !== '' && this.state.password !== ''
			? this.setState({ enableSubmit: true })
			: this.setState({ enableSubmit: false });
	}

	render() {
		return (
			<>
				<div className={css(styles.appBody, styles.small)}>
					<h1>Log in to continue</h1>
					<p>Login to access the full dashboard</p>
					<form onSubmit={this.handleLoginSubmit}>
						<label htmlFor='email'>Email: </label>
						<input
							className={css(styles.noBorder)}
							type='email'
							id='email'
							name='email'
							onChange={this.handleChangeEmail}
							value={this.state.email}
						/>
						<label htmlFor='password'>Password: </label>
						<input
							className={css(styles.noBorder)}
							type='password'
							id='password'
							name='password'
							onChange={this.handleChangePassword}
							value={this.state.password}
						/>
						<input
							className={css(styles.yellowBorder)}
							type='submit'
							value='OK'
							disabled={!this.state.enableSubmit}
						/>
					</form>
				</div>
			</>
		);
	}
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
		},
	},
	noBorder: {
		'@media (max-width: 900px)': {
			border: 'none',
		},
	},
	yellowBorder: {
		'@media (max-width: 900px)': {
			border: '2px solid gold',
			backgroundColor: 'transparent',
			width: '5vw',
		},
	},
});

export default Login;
