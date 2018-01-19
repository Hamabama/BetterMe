import quoteList from './quote-list-reducer';
import currentQuoteId from './current-quote-reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    quoteList,
    currentQuoteId
});