import React, {useState} from 'react';
import { View, Text, ImageBackground } from 'react-native';
import colors from '../styles';
import {Item} from '../utils/types';

export default function TaskList({Tasks} : {Tasks:Item[]}) {

    const customStyle = (bl:boolean) => {
        if (bl) return {color: '#10b31e'}
        return {color: '#b52f10'}
    }

    return (
        <View style={{width: "100%", justifyContent: "center", minHeight: 260}}>
            <ImageBackground source={require('../../assets/book.png')} imageStyle={{opacity:0.8}} resizeMode="contain" style={{alignItems: 'center',padding: 8 , justifyContent: "center", width: "100%", minHeight: 240}}>
                {Tasks.filter(task => task.task.length > 1).map((e, index) => {
                    if (index < 10) return <Text key={index} style={{
                        textShadowColor: 'rgba(0, 0, 0, 0.60)',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 4,
                        fontSize: 22 ,...customStyle(e.completed)}}>{e.task}</Text>
                })}
            </ImageBackground>
        </View>
    );

}













