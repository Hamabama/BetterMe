import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../../constants/colors';
import QuoteListContainer from '../containers/quote-list-container';


class QuoteListLayerView extends React.Component {

    constructor(props) {

        super(props);

        this.onAddPress = this.onAddPress.bind(this);

    }

    onAddPress() {

        this.props.navigation.navigate('Add');
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.noQuotes}>You don't have any quotes</Text>
                <ScrollView>
                    <QuoteListContainer navigation={this.props.navigation} />
                </ScrollView>
                <View style={styles.footer} >
                    <Icon name='add'
                        size={26}
                        raised
                        onPress={this.onAddPress}
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
    },
    noQuotes: {
        position: 'absolute',
        right: 0,
        left: 0,
        fontSize: 20,
        padding: 10,
        color: colors.WHITE,
        textAlign: 'center'
    }
});

export default QuoteListLayerView;