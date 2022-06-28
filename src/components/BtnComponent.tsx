import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import colors from '../styles';

export default function BtnComponent({children, onPress, secondary} : {children: React.ReactNode, onPress: ()=>void, secondary: Boolean}) {
    const btnStyle = () => {
        if (secondary) return {backgroundColor: colors.secondary, margin: 8, padding: 8, borderRadius: 32, minWidth: 80, borderColor: colors.primary, borderWidth: 2}
        return {backgroundColor: colors.primary, margin: 8, padding: 8, borderRadius: 32, minWidth: 80, borderColor: colors.primary, borderWidth: 2}
    }

    const txtStyle = () => {
        if (secondary) return {color: colors.primary, fontSize:16, fontWeight: 'bold', textAlign: 'center'}
        return {color: colors.secondary, fontSize:16, fontWeight: 'bold', textAlign: 'center'}
    }

  return (
      <TouchableOpacity style={btnStyle()} onPress={onPress}>
        <Text style={txtStyle()}>{children}</Text>
      </TouchableOpacity>
  );

}