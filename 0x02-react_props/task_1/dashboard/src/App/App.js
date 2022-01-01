import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import './App.css';

function App() {
	return (
		<React.Fragment>
			<Notifications />
			<div className='App'>
				<Header />
				<Login />
				<Footer />
			</div>
		</React.Fragment>
	);
}

export default App;
