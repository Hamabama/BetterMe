import reminders from './reminders-reducer';
import store from '../reducers/store';

describe('reminders reducer', () => {

    it('should return initial state on initialization', () => {

        const stateAfter = {
            MORNING: {
                time: '9:00',
                scheduled: false
            },
            DAY: {
                time: '13:00',
                scheduled: false
            },
            NIGHT: {
                time: '20:00',
                scheduled: false
            }
        }

        expect(reminders(undefined, {})).toEqual(stateAfter);

    });

    it('should return current state on unknown action', () => {

        const stateBefore = {
            MORNING: {
                time: '9:00',
                scheduled: false
            },
            DAY: {
                time: '13:00',
                scheduled: false
            },
            NIGHT: {
                time: '20:00',
                scheduled: false
            }
        }

        const action = { type: 'WHATEVER', data: '0' };

        const stateAfter = {
            MORNING: {
                time: '9:00',
                scheduled: false
            },
            DAY: {
                time: '13:00',
                scheduled: false
            },
            NIGHT: {
                time: '20:00',
                scheduled: false
            }
        }

        expect(reminders(stateBefore, action)).toEqual(stateAfter);

    });

    it('should return an array on LOAD_STORED_REMINDERS ', () => {


        const action = { type: 'LOAD_STORED_REMINDERS', reminders: [] };

        const stateAfter = [];

        expect(reminders(undefined, action)).toEqual(stateAfter);

    });

    it('should change reminder time on CHANGE_REMINDER_TIME action', () => {

        const stateBefore = {
            MORNING: {
                time: '9:00',
                scheduled: false
            },
            DAY: {
                time: '13:00',
                scheduled: false
            },
            NIGHT: {
                time: '20:00',
                scheduled: false
            }
        };

        const action = { type: 'CHANGE_REMINDER_TIME', timeName: 'DAY', time: '14:00' };

        const stateAfter = {
            MORNING: {
                time: '9:00',
                scheduled: false
            },
            DAY: {
                time: '14:00',
                scheduled: false
            },
            NIGHT: {
                time: '20:00',
                scheduled: false
            }
        }

        expect(reminders(stateBefore, action)).toEqual(stateAfter);

    });

    it('should set DAY.scheduled to true on  SET_REMINDER_SCHEDULED action', () => {

        const stateBefore = {
            MORNING: {
                time: '9:00',
                scheduled: false
            },
            DAY: {
                time: '13:00',
                scheduled: false
            },
            NIGHT: {
                time: '20:00',
                scheduled: false
            }
        };

        const action = { type: 'SET_REMINDER_SCHEDULED', timeName: 'DAY' };

        const stateAfter = {
            MORNING: {
                time: '9:00',
                scheduled: false
            },
            DAY: {
                time: '13:00',
                scheduled: true
            },
            NIGHT: {
                time: '20:00',
                scheduled: false
            }
        };

        expect(reminders(stateBefore, action)).toEqual(stateAfter);
    });

    it('should set all reminders schduled property to false on RESET_REMINDERS_STATUS action', () => {

        const stateBefore = {
            MORNING: {
                time: '9:00',
                scheduled: true
            },
            DAY: {
                time: '13:00',
                scheduled: true
            },
            NIGHT: {
                time: '20:00',
                scheduled: true
            }
        };

        const action = { type: 'RESET_REMINDERS_STATUS' };

        const stateAfter = {
            MORNING: {
                time: '9:00',
                scheduled: false
            },
            DAY: {
                time: '13:00',
                scheduled: false
            },
            NIGHT: {
                time: '20:00',
                scheduled: false
            }
        };

        expect(reminders(stateBefore, action)).toEqual(stateAfter);
    });
});