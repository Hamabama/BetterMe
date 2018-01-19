import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const QuoteButtonView = (props) => {
    return (
        <View style={styles.container}>
            <Button onPress={props.onClick}
                title={props.title}
                buttonStyle={styles.button}
                textStyle={styles.buttonText}
                borderRadius={styles.button.borderRadius}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 3
    },
    buttonText: {
        color: '#000'
    }
});

export default QuoteButtonView;