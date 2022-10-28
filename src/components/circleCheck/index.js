import React from 'react';
import {ActivityIndicator, Text, View,Image, TouchableOpacity} from 'react-native';
 import {useSelector} from 'react-redux';
import { BackSvg, CircleCheckSvg } from '~assets/svg';
import {selectAppLoader} from '~redux/slices/configSlice';
import AppColors from '~utills/AppColors';
 import styles from './styles';
export default function CircleCheck({text,onPress,selected=false}) {
  const appLoader = useSelector(selectAppLoader);
  return (
    <View style={styles.headerconatiner}>
      <TouchableOpacity onPress={onPress} style={[styles.circle,{backgroundColor:selected?AppColors
      .black:AppColors.gray}]}>
      <Text style={{color:AppColors.white}}>✓</Text>
        </TouchableOpacity>
      <Text style={styles.text1style}>{text}</Text>
     </View>
  );
}
