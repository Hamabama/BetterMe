const getEpochTime = (time) => {

    const scheduleTime = new Date();

    const timeObj = breakTimeString(time);

    scheduleTime.setHours(timeObj.hours, timeObj.minutes);

    return scheduleTime;
}

const breakTimeString = (time) => {

    const timeArray = time.split(':');

    return {
        hours: timeArray[0],
        minutes: timeArray[1]
    }
}

const getCurrentTimeName = () => {

    const date = new Date();

    const hours = date.getHours();

    if (hours >= 6 && hours <= 12) {

        return 'MORNING';

    } else if (hours > 12 && hours <= 18) {

        return 'DAY';

    } else return 'NIGHT';

}

export default {
    getEpochTime,
    getCurrentTimeName
}