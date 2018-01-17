import React from 'react';
import QuoteListItemContainer from '../containers/quote-list-item-container';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-elements';

const QuoteListView = (props) => {

    return (<List containerStyle={styles.container}>
        {props.quoteList.map(quote => {
            return <QuoteListItemContainer key={quote.id} quote={quote} />
        })}
    </List>);
};

const styles = StyleSheet.create({
    container: {
        marginTop: 2,
        borderTopWidth: 0
    },
});

export default QuoteListView;