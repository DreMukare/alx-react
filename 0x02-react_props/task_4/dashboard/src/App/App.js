import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import './App.css';
import PropTypes from 'prop-types';

function App({ isLoggedIn }) {
	return (
		<React.Fragment>
			<div className='App'>
				<div className='heading-section'>
					<Notifications />
					<Header />
				</div>
				{isLoggedIn ? <CourseList /> : <Login />}
				<Footer />
			</div>
		</React.Fragment>
	);
}

App.defaultProps = {
	isLoggedIn: false,
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
};

export default App;
