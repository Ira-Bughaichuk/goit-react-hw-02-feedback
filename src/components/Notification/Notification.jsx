import React from 'react';
import PropTypes from 'prop-types';
// import {NotificationContainer, NotificationManager} from 'react-notifications';
//npm i react-notifications

function Notification({ message }) {
//     const NotificationContainer = window.ReactNotifications.NotificationContainer;
// const NotificationManager = window.ReactNotifications.NotificationManager;
    return (
        
    //  NotificationManager.error({message })
     <div>{message }</div>
  )
}

Notification.propTypes = {
    message: PropTypes.string
}

export default Notification
