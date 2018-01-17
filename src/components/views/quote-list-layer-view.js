import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../../constants/colors';
import QuoteListContainer from '../containers/quote-list-container';


class QuoteListLayerView extends React.Component {

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
                    <Icon name='add' size={30} raised onPress={this.onAddPress.bind(this)} />
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
    }
});

export default QuoteListLayerView;