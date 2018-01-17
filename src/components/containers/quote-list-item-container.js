import React from 'react';
import QuoteListItemView from '../views/quote-list-item-view';
import store from '../../reducers/store';

class QuoteListItemContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            showDeleteButton: false
        }
    }

    onLongPress() {
        this.setState({ showDeleteButton: true });
    }

    onPress() {
        this.setState({ showDeleteButton: false });
    }

    onPressRightIcon() {
       store.dispatch({ type: 'REMOVE_QUOTE', id: this.props.quote.id });
    }

    render() {
        return <QuoteListItemView 
        quote={this.props.quote} 
        onLongPress={this.onLongPress.bind(this)}
        onPress={this.onPress.bind(this)}
        showDeleteButton={this.state.showDeleteButton}
        onPressRightIcon={this.onPressRightIcon.bind(this)}
        />;
    }
}

export default QuoteListItemContainer;