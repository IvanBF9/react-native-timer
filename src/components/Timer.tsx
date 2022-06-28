import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../styles';

export default function TimerComponent ({time, started, setCounter}: {time: number, started: boolean, setCounter:React.Dispatch<React.SetStateAction<number>>}) {
    const _date = new Date(time);

    const timeConverter = (val:number) => {
        if (val < 10) return '0' + val;
        return val        
    }

    const incrementSecs = () => setCounter((old) => old + 1000);

    const incrementMins = () => setCounter((old) => old + (1000 * 60));
    
    const decrementSecs = () => setCounter((old) => old - 1000);

    const decrementMins = () => setCounter((old) => old - (1000 * 60));

    return (
        <View style={styles.container}>
            <View style={{justifyContent: 'center'}}>
                {!started ? <TouchableOpacity style={styles.btnTop} onPress={incrementMins}/> : <View style={{opacity:0,...styles.btnTop}}></View>}
                    <View style={styles.box}>
                    <Text style={{fontSize: 72, color: colors.secondary}}>
                        {timeConverter(_date.getMinutes())}
                    </Text>
                    </View>
                {!started ? <TouchableOpacity style={styles.btnBot} onPress={decrementMins}/> : <View style={{opacity:0,...styles.btnBot}}></View>}
            </View>            
            <Text style={{fontSize: 72, color: colors.primary, alignItems: 'center', justifyContent: 'center', paddingBottom:8}}>
                :
            </Text>
            
            <View style={{justifyContent: 'center'}}>
                {!started ? <TouchableOpacity style={styles.btnTop} onPress={incrementSecs}/> : <View style={{opacity:0,...styles.btnTop}}></View>}
                    <View style={styles.box}>
                    <Text style={{fontSize: 72, color: colors.secondary}}>
                        {timeConverter(_date.getSeconds())}
                    </Text>
                    </View>
                {!started ? <TouchableOpacity style={styles.btnBot} onPress={decrementSecs}/> : <View style={{opacity:0,...styles.btnBot}}></View>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btnTop: {
        borderTopWidth: 0,
        borderRightWidth: 65,
        borderBottomWidth: 24,
        borderLeftWidth: 65,
        margin: 8,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: colors.primary,
        borderLeftColor: 'transparent',
    },
    btnBot: {
        borderTopWidth: 24,
        borderRightWidth: 65,
        borderBottomWidth: 0,
        borderLeftWidth: 65,
        margin: 8,
        borderTopColor: colors.primary,
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        margin: 8,
        padding:16,
        borderRadius:8,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',

    }
  });