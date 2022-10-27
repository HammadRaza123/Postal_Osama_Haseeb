import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { login } from '~redux/slices/authSlice';
import { Button, ScreenWrapper } from '~components';
import AppColors from '~utills/AppColors';
import Onboarding from '../onbordingScreen';
import ScreenNames from '~routes/routes';
export default function Splash({ navigation, route }) {
    const dispatch = useDispatch()
    return (
        <ScreenWrapper footerUnScrollable={()=>{
            return(
                <View style={styles.btnconatiner1}>
                    <Button containerStyle={styles.btn1}
                     onPress={() =>
                        // console.log('hebje')
                         navigation.navigate(ScreenNames.ONBOARDING)
                         } 
                     textStyle={styles.btn1text} title="Get Started"/>
                </View>
            )
        }} statusBarColor={AppColors.black} barStyle={"light-content"}>
            <View style={styles.mainViewContainer}>
                <View style={styles.imageconatiner}>
                <Image style={styles.postalogo} source={require('../../../assects/PostalLogo.png')}/>
                </View>
            
            </View>
        </ScreenWrapper>
    );
}
