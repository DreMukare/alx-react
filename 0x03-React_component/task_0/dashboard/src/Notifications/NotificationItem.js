import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
	return (
		<React.Fragment>
			{type && value ? <li data-notification-type={type}>{value}</li> : null}
			{html ? (
				<li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>
			) : null}
		</React.Fragment>
	);
};

NotificationItem.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	__html: PropTypes.shape({
		html: PropTypes.string,
	}),
};

NotificationItem.defaultProps = {
	type: 'default',
};

export default NotificationItem;
