import AsyncStorage from '@react-native-async-storage/async-storage';
import {Item} from './types'

const getData = async () => {
    //AsyncStorage.clear();

    try{
        const _json = await AsyncStorage.getItem('data');
        const res = _json != null ? JSON.parse(_json) : [];
        return res;
    }catch(e){
        console.log(e);
    }
}

const storeData = async (value:Item) => {
    try {
        const data = await getData();
        data.push(value);
        const val:string = JSON.stringify(data);
        await AsyncStorage.setItem('data', val)
        return data;
    } catch (e) {
        console.log(e);
    }
}

const editArrayTasks = async (value:Item[]) => {
    try {
        await AsyncStorage.setItem('data', JSON.stringify(value));
        return value.reverse().sort((item:Item) => item.completed ? 1 : -1);
    }catch(e){
        console.log(e);
    }
}

export {storeData, getData, editArrayTasks};