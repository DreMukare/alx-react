import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.length > this.props.listNotifications.length;
	}

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	}

	render() {
		return (
			<React.Fragment>
				{this.props.displayDrawer ? (
					<div className='flex-area'>
						<div className='menuItem'>
							<p>Your notifications</p>
						</div>
						<div className='Notifications'>
							<ul>
								{this.props.listNotifications &&
								this.props.listNotifications.length > 0 ? (
									this.props.listNotifications.map(
										({ id, html, type, value }) => (
											<NotificationItem
												key={id}
												markAsRead={this.markAsRead}
												type={type}
												value={value}
												html={html}
											/>
										)
									)
								) : (
									<div className='notification-header'>
										<NotificationItem value='No new notification for now' />
										<button
											aria-label='Close'
											onClick={console.log('Close button has been clicked')}
										>
											<img
												style={{ display: 'inline' }}
												src={closeIcon}
												alt='Close'
											/>
										</button>
									</div>
								)}
							</ul>
						</div>
					</div>
				) : (
					<div className='menuItem'>
						<p>Your notifications</p>
					</div>
				)}
			</React.Fragment>
		);
	}
}

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
};

export default Notifications;
