import storageHelper from '../helpers/storage';
import store from '../../reducers/store';

const loadRemindersState = () => {

    storageHelper.fetchData('reminders').then((data) => {

        if (data) store.dispatch({ type: 'LOAD_STORED_REMINDERS', reminders: JSON.parse(data) });
    });
}

export default loadRemindersState;