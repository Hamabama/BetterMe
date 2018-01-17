import React from 'react';
import { ButtonGroup } from 'react-native-elements';
import colors from '../../constants/colors';

class QuoteTimeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            buttons: ['MORNING', 'DAY', 'NIGHT']
        };

        this.getSelectedTime(this.state.selectedIndex);
    }

    updateButtons(selectedIndex) {
        this.updateIndex(selectedIndex);
        this.getSelectedTime(selectedIndex);
        this.updateTextColor(selectedIndex);
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex });
    }

    updateTextColor(selectedIndex) {
        if (this.state.buttons[selectedIndex] === 'NIGHT') this.selectedTextColor = '#fff';
        else this.selectedTextColor = '#000';
    }

    getSelectedTime(selectedIndex) {
        const buttonName = this.state.buttons[selectedIndex];
        this.props.handleTimeChange(buttonName);
    }
    render() {
        const { selectedIndex } = this.state;
        const selectedButtonColor = colors[this.state.buttons[selectedIndex]];

        return (
            <ButtonGroup
                onPress={this.updateButtons.bind(this)}
                selectedIndex={selectedIndex}
                buttons={this.state.buttons}
                selectedButtonStyle={{ backgroundColor: selectedButtonColor }}
                selectedTextStyle={{ color: this.selectedTextColor }}
                containerStyle={{ height: 50, marginTop: 50 }}
            />
        );
    }
}

export default QuoteTimeContainer;
