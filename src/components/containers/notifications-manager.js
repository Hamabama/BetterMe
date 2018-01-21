import store from '../../reducers/store';
import filter from '../helpers/filter';
import timeHelper from '../helpers/time';
import notificationHelper from '../helpers/notification';


class NotificationsManager {
    constructor() {
        this.state = {
            currentList: null,
            pickedQuote: null,
            currentTimeName: null
        }
    }

    getCurrentList() {
        const state = store.getState();
        const list = filter.getCurrentList(state.quoteList);
        //this.setState({ currentList: list });
        return list;
    }

    pickRandomQuote() {

        const list = this.getCurrentList();
        //const length = this.state.currentList.length;
        // const index = Math.floor(Math.random() * Math.floor(length));
        const index = Math.floor(Math.random() * Math.floor(list.length));
        //this.setState({ pickedQuote: this.state.currentList[index] });

        return list[index];
    }

    scheduleCurrentNotification() {

        const currentTimeName = timeHelper.getCurrentTimeName();

        const state = store.getState();

        // if (state.reminder[this.state.currentTimeName] === true) return;

        //const text = this.state.pickedQuote.text;

        const quote = this.pickRandomQuote();

        // this.setState({ currentTimeName });

        const timeToSchedule = state.reminders[currentTimeName];

        const title = 'test';

        const notification = notificationHelper.setupNotification(title, quote.text);

        //const timeToScheduleDateFormat = notificationHelper.setupSchedulingOptions(timeToSchedule);

        console.log(timeToSchedule.toString());

        notificationHelper.scheduleNotifications(notification, timeToSchedule);

        //store.dispatch({ type: 'UPDATE_REMINDER_STATUS', timeName: this.state.currentTimeName, status: true });
    }


}

export default NotificationsManager;