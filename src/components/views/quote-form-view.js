import React from 'react';
import { View, StyleSheet } from 'react-native';
import QuoteFormTextView from './quote-form-text-view';
import QuoteButtonPanelView from './quote-button-panel-view';
import QuoteTimeContainer from '../containers/quote-time-container';

const QuoteFormView = (props) => {
    
    return (
        <View style={styles.form}>
            <QuoteFormTextView handleInput={props.handleInput} errorMessage={props.errorMessage} />
            <QuoteTimeContainer handleTimeChange={props.handleTimeChange} />
            <QuoteButtonPanelView handleSubmit={props.handleSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        marginTop: 0,
        justifyContent: 'center'
    }
});


export default QuoteFormView;