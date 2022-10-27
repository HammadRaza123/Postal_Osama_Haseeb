import React from 'react';
import { Text, View,Image} from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
 import {Button, ScreenWrapper } from '~components';
import AppColors from '~utills/AppColors';
import Swiper from 'react-native-swiper';
export default function Onboarding({ navigation, route }) {
    const dispatch = useDispatch()
    return (
        <ScreenWrapper statusBarColor={AppColors.black} barStyle={"light-content"}>
            <Swiper>
            <View style={styles.mainViewContainer}>
            <Image
            style={styles.swiperlogo}
            source={require("../../../assects/Swiper1.png")}
          />
             </View>
            <View style={styles.mainViewContainer}>
            <Image
            style={styles.swiperlogo}
            source={require("../../../assects/Swiper2.png")}
          />
             </View>
            <View style={styles.mainViewContainer}>
            <Image
            style={styles.swiperlogo}
            source={require("../../../assects/Swiper3.png")}
          />
             </View>
            </Swiper>
            <View style={styles.btnconatiner1}>
            <Button
              containerStyle={styles.btn1}
              onPress={() =>
                console.log('hebje')
                // navigation.navigate(ScreenNames.ONBOARDING)
              }
              textStyle={styles.btn1text}
              title="Next"
            />
            </View>
        </ScreenWrapper>
    );
}
