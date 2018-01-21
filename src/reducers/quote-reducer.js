let quoteId = 0;
const initialState = {
    id: null,
    text: null,
    time: null
}

const quote = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_QUOTE':
            return {
                id: quoteId++,
                text: action.text,
                time: action.time
            }
        case 'CHANGE_QUOTE_REMINDER_TIME':
            if (state.id !== action.id) return state;
            return {
                ...state,
                time: action.time
            }
        default: return state;
    }
}

export default quote;