import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer }) => {
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
							<NotificationItem type='default' value='New course available' />
							<NotificationItem type='urgent' value='New resume available' />
							<NotificationItem type='urgent' html={getLatestNotification()} />
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
};

Notifications.defaultProps = {
	displayDrawer: false,
};
export default Notifications;
