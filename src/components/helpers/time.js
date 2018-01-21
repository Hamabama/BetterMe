const getEpochTime = ({ hours, minutes }) => {
    const time = new Date();
    time.setHours(hours, minutes);
    return time;
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