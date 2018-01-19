import React from 'react';
import QuoteListItemView from '../views/quote-list-item-view';
import store from '../../reducers/store';
import colors from '../../constants/colors';

class QuoteListItemContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            showDeleteButton: false,
            backgroundColor: '#3D6DCC'
        }

    }
    componentDidMount() {
        this.getBackgroundColor();
    }

    getBackgroundColor() {
        const backgroundColor = colors[this.props.quote.time];
        this.setState({ backgroundColor });
    }

    onLongPress() {
        this.setState({ showDeleteButton: true });
    }

    onPress() {
        if (this.state.showDeleteButton === true) {
            this.setState({ showDeleteButton: false });
            return;
        }
        store.dispatch({ type: 'SET_CURRENT_QUOTE', id: this.props.quote.id });
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
            backgroundColor={this.state.backgroundColor}
        />;
    }
}

export default QuoteListItemContainer;