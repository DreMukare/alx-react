import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { displayDrawer: false };

		this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
		this.handleHideDrawer = this.handleHideDrawer.bind(this);
	}

	listCourses = [
		{ id: 1, name: 'ES6', credit: 60 },
		{ id: 2, name: 'Webpack', credit: 20 },
		{ id: 3, name: 'React', credit: 40 },
	];

	listNotifications = [
		{ id: 1, type: 'default', value: 'New course available' },
		{ id: 2, type: 'urgent', value: 'New resume available' },
		{ id: 3, type: 'default', html: getLatestNotification() },
	];

	componentDidMount() {
		document.addEventListener('keydown', (e) => {
			if (e.ctrlKey && e.key === 'h') {
				alert('Logging you out');
				this.props.logOut();
			}
		});
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', (e) => {
			if (e.ctrlKey && e.key === 'h') {
				alert('Logging you out');
				this.props.logOut();
			}
		});
	}

	handleDisplayDrawer() {
		this.setState({ displayDrawer: true });
	}

	handleHideDrawer() {
		this.setState({ displayDrawer: false });
	}

	render() {
		return (
			<>
				<div className={css(styles.container, styles.small)}>
					<Header />
					<Notifications
						listNotifications={this.listNotifications}
						displayDrawer={this.state.displayDrawer}
						handleDisplayDrawer={this.handleDisplayDrawer}
						handleHideDrawer={this.handleHideDrawer}
					/>
				</div>
				<hr className={css(styles.hr)} />
				{this.props.isLoggedIn ? (
					<BodySectionWithMarginBottom>
						<CourseList listCourses={this.listCourses} />
					</BodySectionWithMarginBottom>
				) : (
					<BodySectionWithMarginBottom>
						<Login />
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
			</>
		);
	}
}

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	logOut: PropTypes.func,
};

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => {
		return;
	},
};

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
