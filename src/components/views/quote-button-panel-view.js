import React from 'react';
import QuoteButtonView from './quote-button-view';
import { View, StyleSheet } from 'react-native';

class QuoteButtonPanelView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <QuoteButtonView
                    onClick={this.props.handleSubmit}
                    color={'#fff'}
                    title={'SUBMIT'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        height: 50
    }
});

export default QuoteButtonPanelView;