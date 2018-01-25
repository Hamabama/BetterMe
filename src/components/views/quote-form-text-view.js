import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const QuoteFormTextView = (props) => {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder='Add quote'
                onChangeText={props.handleInput}
                underlineColorAndroid={'#fff'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 10,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 3
    },
    textInput: {
        height: 40,
        fontSize: 20
    }
});

export default QuoteFormTextView;