import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import QuoteFormContainer from '../containers/quote-form-container';

const QuoteLayerView = (props) => {
    return (
        <View style={styles.container}>
            <QuoteFormContainer navigation={props.navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND
    }
});

export default QuoteLayerView;