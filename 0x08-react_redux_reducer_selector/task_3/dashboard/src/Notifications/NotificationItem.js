import React, { PureComponent } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';


class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <>
        {value
          ? <li
            data-notification-type={type}
            onClick={() => markAsRead(id)}
            className={type === 'default' ? css(styles.default) : css(styles.urgent)}
          >{value}
          </li>
          : null
        }
        {html
          ? <li data-urgent className={css(styles.urgent)} dangerouslySetInnerHTML={{ __html: html }} onClick={() => markAsRead(id)}></li>
          : null
        }
      </>
    );
  }
}

NotificationItem.propTypes = {
  __html: PropTypes.shape({
    html: PropTypes.string
  }),
  type: PropTypes.string,
  value: PropTypes.string
  // markAsRead: ,
  // key: 
}

NotificationItem.defaultProps = {
  type: 'default',
}

const styles = StyleSheet.create({
  default: {
    color: 'blue',
    '@media (max-width: 900px)': {
      borderBottom: '1px solid black',
      listStyle: 'none',
      fontSize: '20px',
      padding: '10px 8px',
    }
  },
  urgent: {
    color: 'red',
    '@media (max-width: 900px)': {
      borderBottom: '1px solid black',
      listStyle: 'none',
      fontSize: '20px',
      padding: '10px 8px',
    }
  }
})

export default NotificationItem;
