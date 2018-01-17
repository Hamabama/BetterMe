import React from 'react';
import QuoteListItemView from '../views/quote-list-item-view';

class QuoteListItemContainer extends React.Component {

    render() {
        return <QuoteListItemView quote={this.props.quote} />;
    }
}

export default QuoteListItemContainer;