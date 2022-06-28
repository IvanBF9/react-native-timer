import React, {useState} from 'react';
import { View, TextInput } from 'react-native';
import colors from '../styles';
import Btn from '../components/BtnComponent';
import {Item} from '../utils/types';

export default function TaskForm({setNewTask} : {setNewTask:React.Dispatch<React.SetStateAction<Item>>}) {

    const [text, setText] = useState('');

    const createTask = () => {
        setNewTask({task: text, completed: false} as Item);
    };

    return (
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TextInput
                style={{borderColor: colors.primary, borderWidth: 2, borderRadius: 4, width: 240, height: 42, margin:8, padding:8}}
                onChangeText={setText}
                placeholder="create a new task !"
                keyboardType="default"
            />
            <Btn secondary={false} onPress={createTask}>Add</Btn>
        </View>
    );

}