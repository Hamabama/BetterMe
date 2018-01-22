import quoteList from './quote-list-reducer';
import reminders from './reminders-reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    quoteList,
    reminders
});