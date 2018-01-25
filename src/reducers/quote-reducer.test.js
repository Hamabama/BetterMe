import quote from './quote-reducer';

describe('quote reducer', () => {

    it('should handle ADD_QUOTE', () => {

        const action = { type: 'ADD_QUOTE', text: 'one', time: 'DAY', id: 0 };

        const stateAfter = { id: 0, text: 'one', time: 'DAY' };

        expect(quote(undefined, action)).toEqual(stateAfter);
    });

    it('should handle unknown type', () => {

        const stateBefore = { id: null, text: null, time: null };

        const action = {};

        const stateAfter = { id: null, text: null, time: null };

        expect(quote(stateBefore, action)).toEqual(stateAfter);

    });

    it('should handle CHANGE_QUOTE_REMINDER_TIME with wrong id', () => {

        const stateBefore = { id: 0, text: 'woot', time: 'DAY' };

        const action = { type: 'CHANGE_QUOTE_REMINDER_TIME', id: 1, time: 'MORNING' };

        const stateAfter = { id: 0, text: 'woot', time: 'DAY' };

        expect(quote(stateBefore, action)).toEqual(stateAfter);
    });

    it('should handle CHANGE_QUOTE_REMINDER_TIME with correct id', () => {

        const stateBefore = { id: 1, text: 'woot', time: 'DAY' };

        const action = { type: 'CHANGE_QUOTE_REMINDER_TIME', id: 1, time: 'MORNING' };

        const stateAfter = { id: 1, text: 'woot', time: 'MORNING' };

        expect(quote(stateBefore, action)).toEqual(stateAfter);
    });
});