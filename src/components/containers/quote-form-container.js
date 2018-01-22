import React from 'react';
import QuoteFormView from '../views/quote-form-view';
import { Keyboard } from 'react-native';
import store from '../../reducers/store';

class QuoteFormContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            textInput: '',
            timeName: '',
            errorMessage: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
    }

    handleSubmit() {
        if (this.state.textInput === '') {
            this.setState({ errorMessage: 'Add quote' });
            return;
        }
        store.dispatch({ type: 'ADD_QUOTE', text: this.state.textInput, time: this.state.timeName });
        Keyboard.dismiss();
        this.props.navigation.navigate('Main');
    }

    handleInput(el) {
        this.input = el;
    }

    handleTimeChange(timeName) {
        this.setState({ timeName: timeName });
    }

    render() {
        return (<QuoteFormView
            handleSubmit={this.handleSubmit}
            handleInput={text => this.setState({ textInput: text })}
            handleTimeChange={this.handleTimeChange}
            errorMessage={this.state.errorMessage}
        />);
    }
}

export default QuoteFormContainer;