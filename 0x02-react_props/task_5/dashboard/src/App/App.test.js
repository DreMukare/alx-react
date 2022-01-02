import React from 'react';
import App from './App';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { shallow } from 'enzyme';

const listCourses = [
	{ id: 1, name: 'ES6', credit: 60 },
	{ id: 2, name: 'Webpack', credit: 20 },
	{ id: 3, name: 'React', credit: 40 },
];

describe('App tests', () => {
	it('renders without crashing', () => {
		const component = shallow(<App />);

		expect(component).toBeDefined();
	});
	it('should render Notifications component', () => {
		const component = shallow(<App />);

		expect(component.contains(<Notifications />)).toBe(true);
	});
	it('should render Header component', () => {
		const component = shallow(<App />);

		expect(component.contains(<Header />)).toBe(true);
	});
	it('should render Login Component', () => {
		const component = shallow(<App />);

		expect(component.contains(<Login />)).toBe(true);
	});
	it('should render Footer component', () => {
		const component = shallow(<App />);

		expect(component.contains(<Footer />)).toBe(true);
	});
	it('does not render courselist if logged out', () => {
		const component = shallow(<App isLoggedIn={false} />);

		expect(component.contains(<CourseList />)).toBe(false);
	});
	it('renders courselist if logged in', () => {
		const component = shallow(<App isLoggedIn={true} />);

		expect(component.find(CourseList)).toHaveLength(1);
		expect(component.contains(<Login />)).toBe(false);
	});
});
