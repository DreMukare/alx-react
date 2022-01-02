import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({ displayDrawer, listNotifications }) => {
	return (
		<React.Fragment>
			{displayDrawer ? (
				<div className='flex-area'>
					<div className='menuItem'>
						<p>Your notifications</p>
					</div>
					<div className='Notifications'>
						<div className='notification-header'>
							<p>Here is the list of notifications</p>
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
						<ul>
							{listNotifications && listNotifications.length > 0 ? (
								listNotifications.map(({ id, html, type, value }) => {
									<NotificationItem
										key={id}
										html={html}
										type={type}
										value={value}
									/>;
								})
							) : (
								<NotificationItem value='No new notification for now' />
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
};

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
	displayDrawer: false,
};
export default Notifications;
