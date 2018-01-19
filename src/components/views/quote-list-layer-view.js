import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../../constants/colors';
import store from '../../reducers/store';
import QuoteListContainer from '../containers/quote-list-container';


class QuoteListLayerView extends React.Component {

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            const state = store.getState();
            this.props.navigation.navigate('Current', { id: state.currentQuoteId });
        })
    }
    onAddPress() {
        this.props.navigation.navigate('Add');
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <QuoteListContainer />
                </ScrollView>
                <View style={styles.footer} >
                    <Icon name='add'
                        size={26}
                        raised
                        onPress={this.onAddPress.bind(this)}
                        containerStyle={styles.addIcon} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 50,
        right: 10
    },
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND,
        marginTop: 0
    },
    addIcon: {
        borderRadius: 3
    }
});

export default QuoteListLayerView;