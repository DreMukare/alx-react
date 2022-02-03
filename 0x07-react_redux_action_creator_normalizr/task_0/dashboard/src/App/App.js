import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import { AppContext, defaultUser } from './AppContext';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayDrawer: false,
			user: defaultUser,
			logOut: () => {
				this.setState({ user: defaultUser });
			},
			listNotifications: [
				{ id: 1, type: 'default', value: 'New course available' },
				{ id: 2, type: 'urgent', value: 'New resume available' },
				{ id: 3, type: 'default', html: getLatestNotification() },
			],
		};

		this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
		this.handleHideDrawer = this.handleHideDrawer.bind(this);
		this.logIn = this.logIn.bind(this);
		this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
	}

	listCourses = [
		{ id: 1, name: 'ES6', credit: 60 },
		{ id: 2, name: 'Webpack', credit: 20 },
		{ id: 3, name: 'React', credit: 40 },
	];

	componentDidMount() {
		document.addEventListener('keydown', (e) => {
			if (e.ctrlKey && e.key === 'h') {
				alert('Logging you out');
				this.state.logOut();
			}
		});
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', (e) => {
			if (e.ctrlKey && e.key === 'h') {
				alert('Logging you out');
				// this.state.logOut();
			}
		});
	}

	handleDisplayDrawer() {
		this.setState({ displayDrawer: true });
	}

	handleHideDrawer() {
		this.setState({ displayDrawer: false });
	}

	logIn(email, password) {
		this.setState({
			user: {
				email: email,
				password: password,
				isLoggedIn: true,
			},
		});
	}

	markNotificationAsRead(id) {
		const read = this.state.listNotifications.filter(
			(notification) => notification.id !== id
		);

		this.setState({ listNotifications: read });
	}

	render() {
		const { user, logOut } = this.state;
		return (
			<AppContext.Provider value={{ user, logOut }}>
				<div className={css(styles.container, styles.small)}>
					<Header />
					<Notifications
						markNotificationAsRead={this.markNotificationAsRead}
						listNotifications={this.state.listNotifications}
						displayDrawer={this.state.displayDrawer}
						handleDisplayDrawer={this.handleDisplayDrawer}
						handleHideDrawer={this.handleHideDrawer}
					/>
				</div>
				<hr className={css(styles.hr)} />
				{this.state.user.isLoggedIn ? (
					<BodySectionWithMarginBottom>
						<CourseList listCourses={this.listCourses} />
					</BodySectionWithMarginBottom>
				) : (
					<BodySectionWithMarginBottom>
						<Login logIn={this.logIn} />
					</BodySectionWithMarginBottom>
				)}
				<BodySection title='News from the School'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
					</p>
				</BodySection>
				<hr className={css(styles.hr)} />
				<Footer />
			</AppContext.Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	hr: {
		borderTop: '2px solid red',
	},
	small: {
		'@media (max-width: 900px)': {
			display: 'grid',
			justifyContent: 'center',
		},
	},
});

export default App;
