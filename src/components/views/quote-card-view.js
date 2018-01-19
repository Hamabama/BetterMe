import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const QuoteCardView = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.BACKGROUND
    },
    text: {
        fontSize: 20
    }
});

export default QuoteCardView;