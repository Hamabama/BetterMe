import quote from './quote-reducer';

const quoteList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_QUOTE':
            return [...state, quote(undefined, action)];
        case 'CHANGE_QUOTE_REMINDER_TIME':
            return state.map(q => quote(q, action));
        case 'REMOVE_QUOTE':
            return state.filter(q => q.id !== action.id);
        default: return state;
    }
}

export default quoteList;