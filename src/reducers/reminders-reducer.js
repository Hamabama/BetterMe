import timeHelper from '../components/helpers/time';
import storageHelper from '../components/helpers/storage';

const initialState = {
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

const reminders = (state = initialState, action) => {

    let newState = {};
    let obj = {};

    switch (action.type) {

        case 'LOAD_STORED_REMINDERS':

            return action.reminders;

        case 'CHANGE_REMINDER_TIME':

            obj[action.timeName] = updateTime(state[action.timeName], action.time);

            newState = { ...state, ...obj };

            storageHelper.saveData(newState, 'reminders');

            return newState;

        case 'SET_REMINDER_SCHEDULED':

            newState = setTimeScheduled(state, action.timeName);

            storageHelper.saveData(newState, 'reminders');

            console.warn('Scheduled ', newState);

            return newState;

        case 'RESET_REMINDERS_STATUS':

            newState = resetScheduled(state);

            storageHelper.saveData(newState, 'reminders');

            return newState;

        default: return state;
    }
}

const updateTime = (object, time) => {

    return {
        ...object, time: time
    }
}

const setTimeScheduled = (state, timeName) => {

    const newState = {};

    for (let key in state) {

        if (key === timeName) newState[key] = { ...state[key], scheduled: true };

        else newState[key] = { ...state[key], scheduled: false };
    }

    return newState;
}

const resetScheduled = (state) => {

    const newState = {};

    for (let key in state) {

        newState[key] = { ...state[key], scheduled: false };

    }

    return newState;
}


export default reminders;