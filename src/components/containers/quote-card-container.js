import React from 'react';
import QuoteCardView from '../views/quote-card-view';
import store from '../../reducers/store';

class QuoteCardContainer extends React.Component {

    getCurrentCard(id) {

        const state = store.getState();

        const currentList = state.quoteList.filter(quote => quote.id === id);

        return currentList[0];
    }

    render() {

        const { state } = this.props.navigation;

        const currentCard = this.getCurrentCard(state.params.id);

        return <QuoteCardView {...currentCard} />;
    }
}

export default QuoteCardContainer;