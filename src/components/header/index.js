import React from 'react';
import {ActivityIndicator, Text, View,Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import { BackSvg } from '~assets/svg';
import {selectAppLoader} from '~redux/slices/configSlice';
import AppColors from '~utills/AppColors';
import styles from './styles';
export default function Header({text,onPress}) {
  const appLoader = useSelector(selectAppLoader);
  return (
    <View style={styles.headerconatiner}>
      <TouchableOpacity onPress={onPress}>
      <BackSvg />
      </TouchableOpacity>
      <Text style={styles.text1}>{text}</Text>
     </View>
  );
}
