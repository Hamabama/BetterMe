import timeHelper from '../components/helpers/time';

const initialState = {
    MORNING: {
        time: timeHelper.getEpochTime({ hours: 9, minutes: 0 }),
        scheduled: false
    },
    DAY: {
        time: timeHelper.getEpochTime({ hours: 13, minutes: 0 }),
        scheduled: false
    },
    NIGHT: {
        time: timeHelper.getEpochTime({ hours: 20, minutes: 0 }),
        scheduled: false
    }
}

const reminders = (state = initialState, action) => {

    if (action.type === 'CHANGE_TIME') {

        switch (action.timeName) {
            case 'MORNING':
                return { ...state, 'MORNING': updateTime(state['MORNING'], action.time) };
            case 'DAY':
                return { ...state, 'DAY': updateTime(state['DAY'], action.time) };
            case 'NIGHT':
                return { ...state, 'NIGHT': updateTime(state['NIGHT'], action.time) };
            default: return state;
        }

    }

    else if (action.type === 'UPDATE_REMINDER_STATUS') {

        switch (action.timeName) {
            case 'MORNING':
                return { ...state, 'MORNING': updateStatus(state['MORNING'], action.status) };
            case 'DAY':
                return { ...state, 'DAY': updateStatus(state['DAY'], action.status) };
            case 'NIGHT':
                return { ...state, 'NIGHT': updateStatus(state['NIGHT'], action.status) };
            default: return state;
        }

    }

    else return state;

}

const updateTime = (object, time) => {
    return {
        ...object, time: timeHelper.getEpochTime(time)
    }
}

const updateStatus = (object, status) => {
    return {
        ...object, scheduled: status
    }
}

export default reminders;