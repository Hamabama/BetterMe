import React from 'react';
import { Button, View } from 'react-native';

const QuoteButtonView = (props) => {
    return (
        <View style={{ flex: 1, margin: 10 }}>
            <Button onPress={props.onClick} title={props.title}
                color={props.color} />
        </View>
    );
}

export default QuoteButtonView;