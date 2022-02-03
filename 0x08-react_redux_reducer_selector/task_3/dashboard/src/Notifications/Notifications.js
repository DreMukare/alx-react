import React, { Component, PureComponent } from 'react';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from './close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

class Notifications extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			displayDrawer,
			listNotifications,
			handleDisplayDrawer,
			handleHideDrawer,
			markNotificationAsRead,
		} = this.props;
		return (
			<div
				className={
					displayDrawer
						? css(styles.notificationsContainer, styles.drawerOpen)
						: css(styles.notificationsContainer)
				}
			>
				<div
					className={
						displayDrawer
							? css(styles.none)
							: css(styles.menuItem, styles.hover)
					}
					onClick={() => {
						handleDisplayDrawer();
					}}
				>
					Your notifications
				</div>
				{displayDrawer ? (
					<div className={css(styles.Notifications, styles.noBorder)}>
						<p className={css(styles.center)}>
							Here is the list of notifications
						</p>
						<ul>
							{listNotifications && listNotifications.length > 0 ? (
								listNotifications.map(({ type, value, html, id }) => (
									<NotificationItem
										key={id}
										type={type}
										value={value}
										html={html}
										markAsRead={markNotificationAsRead}
										id={id}
										styles={
											html || type === 'urgent' ? styles.urgent : styles.default
										}
									/>
								))
							) : (
								<NotificationItem value='No new notification for now' />
							)}
						</ul>
						<button
							className={css(styles.button)}
							aria-label='Close'
							onClick={() => {
								console.log('Close button has been clicked');
								handleHideDrawer();
							}}
						>
							<img
								src={closeIcon}
								alt='close icon'
								width='10px'
								height='10px'
							/>
						</button>
					</div>
				) : null}
			</div>
		);
	}
}

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
	handleDisplayDrawer: PropTypes.func,
	handleHideDrawer: PropTypes.func,
	markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
	handleDisplayDrawer: () => {},
	handleDisplayDrawer: () => {},
	markNotificationAsRead: () => {},
};

const opacityKeyframes = {
	from: {
		opacity: 0.5,
	},
	to: {
		opacity: 1,
	},
};

const bounceKeyframes = {
	'0%': {
		transform: 'translateY(0)',
	},
	'25%': {
		transform: 'translateY(-5px)',
	},
	'75%': {
		transform: 'translateY(5px)',
	},
	'100%': {
		transform: 'translateY(0)',
	},
};

const styles = StyleSheet.create({
	notificationsContainer: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: '1rem',
		marginRight: '1rem',
		gridRow: '1',
	},
	menuItem: {
		textAlign: 'right',
		marginRight: '.5rem',
	},
	hover: {
		':hover': {
			cursor: 'pointer',
			animationName: [bounceKeyframes, opacityKeyframes],
			animationDuration: '0.5s, 1s',
			animationIterationCount: '3',
		},
	},
	Notifications: {
		border: 'dashed red',
		padding: '2rem',
		marginTop: '.3rem',
	},
	noBorder: {
		'@media (max-width: 900px)': {
			border: 'none',
		},
	},
	none: {
		display: 'none',
		'@media (max-width: 900px)': {
			display: 'none',
		},
	},
	button: {
		position: 'absolute',
		top: '3.5rem',
		right: '2.2rem',
		'@media (max-width: 900px)': {
			top: '10.5rem',
			right: '14.2rem',
		},
	},
	center: {
		'@media (max-width: 900px)': {
			marginLeft: '4vw',
			fontSize: '20px',
		},
	},
	drawerOpen: {
		'@media (max-width: 900px)': {
			gridRow: '2',
		},
	},
});

export default Notifications;
