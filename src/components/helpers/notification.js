import PushNotification from 'react-native-push-notification';

PushNotification.configure({

    onNotification: function (notification) {

    }


});

const setupNotificationConfig = (id, message, date, color) => {

    return {
        id,
        color,
        vibrate: true,
        vibration: 300,
        title: 'BetterMe',
        message,
        date
    }
}

const scheduleNotification = ({id, message, date, color}) => {

    const config = setupNotificationConfig(id, message, date, color);

    PushNotification.localNotificationSchedule(config);

}

const cancelAllScheduledNotifications = () => {

    PushNotification.cancelAllLocalNotifications();
}

export default {
    scheduleNotification,
    cancelAllScheduledNotifications
}