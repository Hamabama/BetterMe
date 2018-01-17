import React from 'react';
import { ButtonGroup } from 'react-native-elements';

class QuoteTimeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            buttons: ['MORNING', 'DAY', 'NIGHT']
        };

        this.getCurrentTime(this.state.selectedIndex);
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex });
        this.getCurrentTime(selectedIndex);
    }

    getCurrentTime(selectedIndex) {
        const buttonName = this.state.buttons[selectedIndex];
        this.props.handleTimeChange(buttonName);
    }
    render() {
        const { selectedIndex } = this.state;

        return (
            <ButtonGroup
                onPress={this.updateIndex.bind(this)}
                selectedIndex={selectedIndex}
                buttons={this.state.buttons}
                selectedButtonStyle={{ backgroundColor: '#0f0' }}
                containerStyle={{ height: 50, marginTop: 50 }}
            />
        );
    }
}

export default QuoteTimeContainer;
