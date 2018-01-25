import React from 'react';
import store from '../../reducers/store';
import storageHelper from '../helpers/storage';
import QuoteListView from '../views/quote-list-view';

class QuoteListContainer extends React.Component {

    componentDidMount() {

        this.unsubscribe = store.subscribe(() => {

            this.forceUpdate();
        });

        storageHelper.fetchData('quoteList').then((data) => {

            if (data) {

                const loadedList = JSON.parse(data);

                store.dispatch({ type: 'LOAD_STORED_LIST', list: loadedList });
            }
        });
    }

    componentWillUnmount() {

        this.unsubscribe();
    }

    render() {

        const state = store.getState();

        return <QuoteListView quoteList={state.quoteList} navigation={this.props.navigation} />;
    }
}

export default QuoteListContainer;