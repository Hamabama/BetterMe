import React from 'react';
import QuoteListItemView from '../views/quote-list-item-view';
import store from '../../reducers/store';
import colors from '../../constants/colors';

class QuoteListItemContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDeleteButton: false
        }

        this.onLongPress = this.onLongPress.bind(this);
        this.onPress = this.onPress.bind(this);
        this.onPressRightIcon = this.onPressRightIcon.bind(this);

    }

    onLongPress() {
        this.setState({ showDeleteButton: true });
    }

    onPress() {
        if (this.state.showDeleteButton === true) {
            this.setState({ showDeleteButton: false });
            return;
        }
        this.props.navigation.navigate('Current', { id: this.props.quote.id });
    }

    onPressRightIcon() {
        store.dispatch({ type: 'REMOVE_QUOTE', id: this.props.quote.id });
    }

    render() {
        const backgroundColor = colors[this.props.quote.time];

        return <QuoteListItemView
            quote={this.props.quote}
            onLongPress={this.onLongPress}
            onPress={this.onPress}
            showDeleteButton={this.state.showDeleteButton}
            onPressRightIcon={this.onPressRightIcon}
            backgroundColor={backgroundColor}
        />;
    }
}

export default QuoteListItemContainer;