import store from '../../reducers/store';
import filterHelper from '../helpers/filter';
import timeHelper from '../helpers/time';
import colors from '../../constants/colors';
import notificationHelper from '../helpers/notification';


const getCurrentList = (timeName) => {

    const state = store.getState();

    const list = filterHelper.getCurrentList(state.quoteList, timeName);

    return list;
}

const pickRandomQuote = (timeName) => {

    const list = getCurrentList(timeName);

    const randomIndex = getRandomIndex(list.length);

    return list[randomIndex];
}

const getRandomIndex = (max) => {

    return Math.floor(Math.random() * Math.floor(max));
}

const scheduleCurrentNotification = () => {

    const currentTimeName = timeHelper.getCurrentTimeName();

    if (allowedToSchedule(currentTimeName) === true) scheduleNotification(currentTimeName);
}

const allowedToSchedule = (currentTimeName) => {

    const state = store.getState();

    console.warn('allowedToSchedule', currentTimeName, state.reminders, (new Date()).toString());

    if (state.quoteList.length === 0) return false;

    const isScheduled = checkedCurrentTimeScheduled(state.reminders, currentTimeName);

    const isReminderTimePassed = checkReminderTime(state.reminders, currentTimeName);

    if (isScheduled || isReminderTimePassed) return false;

    return true;

}

const getTimeToSchedule = (timeName) => {

    const { reminders } = store.getState();

    const time = reminders[timeName].time;

    return timeHelper.getEpochTime(time);
}

const setupNotification = (timeName) => {

    const quote = pickRandomQuote(timeName);

    const timeToSchedule = getTimeToSchedule(timeName);

    const color = getNotificationColor(timeName);

    return {
        id: quote.id,
        message: quote.text,
        date: timeToSchedule,
        color
    }
}

const getNotificationColor = (timeName) => {

    return colors[timeName];
}

const scheduleNotification = (timeName) => {

    const notification = setupNotification(timeName);

    notificationHelper.scheduleNotification(notification);

    setReminderScheduled(timeName);

}

const setReminderScheduled = (timeName) => {

    store.dispatch({ type: 'SET_REMINDER_SCHEDULED', timeName: timeName });
}

const checkedCurrentTimeScheduled = (reminders, currentTimeName) => {

    return reminders[currentTimeName].scheduled;
}

const checkReminderTime = (reminders, currentTimeName) => {

    const time = reminders[currentTimeName].time;

    return timeHelper.getEpochTime(time) < new Date();
}

const cancelAllScheduledNotifications = () => {

    notificationHelper.cancelAllScheduledNotifications();
}

export default {
    scheduleCurrentNotification,
    cancelAllScheduledNotifications,
    getCurrentList,
    pickRandomQuote,
    getRandomIndex,
    allowedToSchedule,
    getTimeToSchedule,
    setupNotification,
    getNotificationColor,
    checkedCurrentTimeScheduled,
    checkReminderTime
};