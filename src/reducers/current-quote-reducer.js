const currentQuoteId = (state = null, action) => {
    switch (action.type) {
        case 'SET_CURRENT_QUOTE':
            return action.id;
        default: return state;
    }
}

export default currentQuoteId;