import { AsyncStorage } from 'react-native';

const saveData = async (state, name) => {

    try {

        await AsyncStorage.setItem(name, JSON.stringify(state));

    } catch (error) {

        console.log('AsyncStorage save error: ' + error.message);
    }
}

const fetchData = (name) => {

    return AsyncStorage.getItem(name);
}

export default {
    saveData,
    fetchData
};