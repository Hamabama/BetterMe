import React from 'react';
import QuoteButtonView from './quote-button-view';
import { View } from 'react-native';

class QuoteButtonPanelView extends React.Component {
    render() {
        return (
            <View style={{ marginTop: 20, flexDirection: 'row' }}>
                <QuoteButtonView onClick={this.props.handleCancel} color={'#f00'} title={'CANCEL'} />
                <QuoteButtonView onClick={this.props.handleSubmit} color={'#00f'} title={'SUBMIT'} />
            </View>
        );
    }
}

export default QuoteButtonPanelView;