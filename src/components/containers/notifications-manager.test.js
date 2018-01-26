import store from '../../reducers/store';
import addQuotes from '../../quotes';
import notificationManager from './notifications-manager';
import timeHelper from '../helpers/time';

describe('Notification manager', () => {

    describe('getCurrentList method with DAY parametr', () => {

        const input = 'DAY';
        addQuotes();

        it('should return non-empty list of quotes with DAY reminder', () => {

            const list = notificationManager.getCurrentList(input);

            expect(list.length).toBeTruthy();
        });

        it('should have all items with time: DAY ', () => {

            const list = notificationManager.getCurrentList(input);
            const expectedOutput = 0;
            const output = list.filter(item => {
                return item.time !== input;
            });

            expect(output.length).toEqual(expectedOutput);
        });
    });

    describe('pickRandomQuote method', () => {

        const input = 'DAY';

        it('should return one quote', () => {

            const quote = notificationManager.pickRandomQuote(input);

            expect(quote).toBeTruthy();

        });

        it('should return a quote wit time: DAY', () => {

            const expectedOutput = 'DAY';
            const quote = notificationManager.pickRandomQuote(input);

            expect(quote.time).toEqual(expectedOutput);

        });
    });

    describe('getRandomIndex method', () => {

        it('should return a number', () => {

            const input = 5;
            const expectedOutput = 'number';

            const output = notificationManager.getRandomIndex(input);

            expect(typeof output === expectedOutput).toEqual(true);

        });
    });

    describe('checkedCurrentTimeScheduled method', () => {

        it('should return false on DAY time', () => {

            const timeName = 'DAY';

            const state = store.getState();

            const reminders = state.reminders;

            const expectedOutput = false;

            const output = notificationManager.checkedCurrentTimeScheduled(reminders, timeName);

            expect(output).toEqual(expectedOutput);


        });

        it('should return true on DAY time', () => {

            store.dispatch({ type: 'SET_REMINDER_SCHEDULED', timeName: 'DAY' });

            const timeName = 'DAY';

            const state = store.getState();

            const reminders = state.reminders;

            const expectedOutput = true;

            const output = notificationManager.checkedCurrentTimeScheduled(reminders, timeName);

            expect(output).toEqual(expectedOutput);


        });
    });

    describe('checkReminderTime method', () => {

        it('should return true if schedule time for current timeframe has passed', () => {

            const timeName = 'MORNING';

            const state = store.getState();

            const reminders = state.reminders;

            const expectedOutput = true;

            const output = notificationManager.checkReminderTime(reminders, timeName);

            expect(output).toEqual(expectedOutput);

        });
    });

    describe('getNotificationColor method', () => {

        it('should return a string on DAY input', () => {

            const input = 'DAY';
            const output = notificationManager.getNotificationColor(input);

            expect(typeof output === 'string').toEqual(true);
        });

        it('should return a string on DAY input', () => {

            const input = 'DAY';
            const output = notificationManager.getNotificationColor(input);
            const expectedOutput = '#FFC93C';

            expect(output).toEqual(expectedOutput);
        });

    });

    describe('setupNotification method', () => {

        const input = 'DAY';

        it('should return notification object', () => {

            const output = notificationManager.setupNotification(input);

            expect(typeof output === 'object').toEqual(true);

        });

        it('should return notification object that has id number', () => {

            const output = notificationManager.setupNotification(input);

            expect(typeof output.id === 'number').toEqual(true);

        });

        it('should return notification object that has message string', () => {

            const output = notificationManager.setupNotification(input);

            expect(typeof output.message === 'string').toEqual(true);

        });

        it('should return notification object that has date instance', () => {

            const output = notificationManager.setupNotification(input);

            expect(output.date instanceof Date).toEqual(true);

        });

        it('should return notification object that has color property as string', () => {

            const output = notificationManager.setupNotification(input);

            expect(typeof output.color === 'string').toEqual(true);

        });

    });

    describe('getTimeToSchedule method', () => {

        const input = 'DAY';

        it('should return Date instance on DAY parameter', () => {

            const output = notificationManager.getTimeToSchedule(input);

            expect(output instanceof Date).toEqual(true);
        });

        it('should return 13:00 on DAY parameter', () => {

            const output = notificationManager.getTimeToSchedule(input);

            const hours = output.getHours();
            const minutes = output.getMinutes();

            expect(hours === 13 && minutes === 0).toEqual(true);

        });
    });

});