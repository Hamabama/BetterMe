import { StackNavigator } from 'react-navigation';
import React from 'react';
import QuoteListLayerView from '../views/quote-list-layer-view';
import QuoteLayerView from '../views/quote-layer-view';

const QuoteListScreen = (props) => {
    return <QuoteListLayerView navigation={props.navigation} />;
}

const AddQuoteScreen = (props) => {
    return <QuoteLayerView navigation={props.navigation} />;
}

const Navigator = StackNavigator({
    Main: {
        screen: QuoteListScreen,
        navigationOptions: {
            headerTitle: 'List'
        }
    },
    Add: {
        screen: AddQuoteScreen,
        navigationOptions: {
            headerTitle: 'Add'
        }
    }
}, { headerMode: 'none' });

export default Navigator;
