import React from 'react';
import { View } from 'react-native';
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';

const QuoteFormTextView = (props) => {
    return (
        <View>
            <FormLabel>{'Enter quote'}</FormLabel>
            <FormInput onChangeText={props.handleInput} />
            <FormValidationMessage>{props.errorMessage}</FormValidationMessage>
        </View>
    );
};

export default QuoteFormTextView;