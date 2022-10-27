import React from 'react';
import {ActivityIndicator, Text, View,Image} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import { BackSvg } from '~assets/svg';
import {selectAppLoader} from '~redux/slices/configSlice';
import AppColors from '~utills/AppColors';
import styles from './styles';
export default function Header({text}) {
  const appLoader = useSelector(selectAppLoader);
  return (
    <View style={styles.headerconatiner}>
      <BackSvg/>
      <Text style={styles.text1}>{text}</Text>
     </View>
  );
}
