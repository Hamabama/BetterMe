import React from 'react';
import store from '../../reducers/store';
import QuoteListView from '../views/quote-list-view';

const QuoteListContainer = (props) => {
    const state = store.getState();
    return <QuoteListView quoteList={state.quoteList} navigation={props.navigation} />;
}

export default QuoteListContainer;