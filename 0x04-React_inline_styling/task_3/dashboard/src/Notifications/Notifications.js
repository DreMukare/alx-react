import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	Notifications: {
		padding: '2em',
		border: '2px dashed red',
	},
	menuItem: {
		textAlign: 'right',
	},
	'notification-header': {
		display: 'flex',
		justifyContent: 'space-between',
	},
	'flex-area': {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
	},
	mobile: {
		'@media (max-width: 375px)': {
			display: 'block',
			height: '100vh',
			width: '100vw',
			marginLeft: 'auto',
			marginRight: 'auto',
			border: 'none',
			fontSize: '20px',
			padding: '0',
		},
	},
});

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
					<div className={css(styles['flex-area'])}>
						<div className={css(styles.menuItem)}>
							<p>Your notifications</p>
						</div>
						<div className={css(styles.Notifications, styles.mobile)}>
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
									<div className={css(styles['notification-header'])}>
										<NotificationItem value='No new notification for now' />
										<button
											style={{
												border: 'none',
												background: 'none',
											}}
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
					<div className={css(styles.menuItem)}>
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
