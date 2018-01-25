import quote from './quote-reducer';
import storageHelper from '../components/helpers/storage';

const quoteList = (state = [], action) => {

    let list = [];

    switch (action.type) {

        case 'LOAD_STORED_LIST':

            return action.list;

        case 'ADD_QUOTE':

            list = [...state, quote(undefined, action)];

            storageHelper.saveData(list, 'quoteList');

            return list;

        case 'CHANGE_QUOTE_REMINDER_TIME':

            list = state.map(q => quote(q, action));

            storageHelper.saveData(list, 'quoteList');

            return list;

        case 'REMOVE_QUOTE':

            list = state.filter(q => q.id !== action.id);

            storageHelper.saveData(list, 'quoteList');

            return list;

        default: return state;
    }
}

export default quoteList;