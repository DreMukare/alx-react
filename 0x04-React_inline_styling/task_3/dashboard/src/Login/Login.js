import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	'App-body': {
		fontSize: '1.4rem',
		padding: '1.2em',
		height: '45%',
	},

	'form-inputs': {
		display: 'flex',
		gap: '2em',
		alignItems: 'center',
	},

	mobile: {
		'@media (max-width: 375px)': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
			gap: '0.5em',
		},
	},

	input: {
		height: '1.4rem',
		marginLeft: '10px',
	},
});

const Login = () => {
	return (
		<>
			<div className={css(styles['App-body'])}>
				<p>Login to access the full dashboard</p>
				<section className={css(styles['form-inputs'], styles.mobile)}>
					<section className='input'>
						<label htmlFor='email'>Email:</label>
						<input
							type='email'
							name='email'
							id='email'
							className={css(styles.input)}
						/>
					</section>
					<section className='input'>
						<label htmlFor='password'>Password: </label>
						<input
							type='password'
							name='password'
							id='password'
							className={css(styles.input)}
						/>
					</section>
					<button>OK</button>
				</section>
			</div>
		</>
	);
};

export default Login;
