import { Notifications } from 'expo';

const setupNotification = (title = '', body = 'no text', link = '', color = '#f00') => {

    return {
        title,
        body,
        android: {
            color,
            vibrate: [0, 100]
        },
        link
    }
};

const setupSchedulingOptions = (time) => {

    return {
        time
    }
}

const scheduleNotifications = (notification, schedulingOptions) => {

    Notifications.scheduleLocalNotificationAsync(notification, schedulingOptions);
}

const presentLocalNotification = (notification) => {

    Notifications.presentLocalNotificationAsync(notification);

}

const cancelAllScheduledNotifications = () => {

    Notifications.cancelAllScheduledNotificationsAsync();

}


export default {

    setupNotification,
    setupSchedulingOptions,
    scheduleNotifications,
    presentLocalNotification,
    cancelAllScheduledNotifications
}