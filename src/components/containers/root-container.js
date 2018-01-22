import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
import colors from '../../constants/colors';

import Navigator from '../navigation/navigator';

class RootContainer extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: 'BetterMe', style: styles.headerCenterComponent }}
                    outerContainerStyles={styles.headerOuterContainer}
                    backgroundColor={colors.BACKGROUND}
                />
                <Navigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.CHARCOAL
    },
    headerCenterComponent: {
        color: '#fff',
        fontSize: 20
    },
    headerOuterContainer: {
        borderBottomWidth: 0
    }
});

export default RootContainer;