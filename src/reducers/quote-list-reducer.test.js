import quoteList from './quote-list-reducer';
import time from '../constants/time';

describe('quoteList reducer', () => {

    it('should return empty array on initial state', () => {

        const stateAfter = [];

        expect(quoteList(undefined, {})).toEqual(stateAfter);

    });

    it('should return non-empty array on ADD_QUOTE on initial state', () => {

        const action = { type: 'ADD_QUOTE', text: 'test', time: time.DAY };
        const stateAfter = 1;

        expect(quoteList(undefined, action).length).toEqual(stateAfter);

    });

    it('should return the same size array on undefined action', () => {

        const stateBefore = [{}, {}];
        const action = {};
        const stateAfter = [{}, {}];

        expect(quoteList(stateBefore, action)).toEqual(stateAfter);

    });

    it('should return the same size array on CHANGE_TIME action', () => {

        const stateBefore = [{}, {}];
        const action = { type: 'CHANGE_TIME' };
        const stateAfter = [{}, {}];

        expect(quoteList(stateBefore, action)).toEqual(stateAfter);

    });

    it('should remove the quote with certain id from the array', () => {
        const quote = { id: 0, text: 'test', time: time.DAY };
        const stateBefore = [quote, { ...quote, id: 1 }, { ...quote, id: 2 }];
        const action = { type: 'REMOVE_QUOTE', id: 1 };
        const stateAfter = [quote, { ...quote, id: 2 }];

        expect(quoteList(stateBefore, action)).toEqual(stateAfter);
    });
});