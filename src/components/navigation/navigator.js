import { StackNavigator } from 'react-navigation';
import React from 'react';
import QuoteListLayerView from '../views/quote-list-layer-view';
import QuoteLayerView from '../views/quote-layer-view';
import QuoteCardContainer from '../containers/quote-card-container';

const QuoteListScreen = (props) => {

    return <QuoteListLayerView navigation={props.navigation} />;
}

const AddQuoteScreen = (props) => {

    return <QuoteLayerView navigation={props.navigation} />;
}

const ShowCurrentQuoteScreen = (props) => {

    return <QuoteCardContainer navigation={props.navigation} />;
}

const Navigator = StackNavigator({

    Main: {
        screen: QuoteListScreen

    },
    Add: {
        screen: AddQuoteScreen
    },
    Current: {
        screen: ShowCurrentQuoteScreen
    }
}, { headerMode: 'none' });

export default Navigator;
