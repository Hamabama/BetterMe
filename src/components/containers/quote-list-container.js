import React from 'react';
import store from '../../reducers/store';
import QuoteListView from '../views/quote-list-view';

class QuoteListContainer extends React.Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const state = store.getState();
        return <QuoteListView quoteList={state.quoteList} />;
    }
}

export default QuoteListContainer;