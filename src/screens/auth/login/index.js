import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { login } from "~redux/slices/authSlice";
import { Button, ScreenWrapper } from "~components";
import Header from "~components/header";
import Textfeild from "~components/textifield";
export default function Login({ navigation, route }) {
  const dispatch = useDispatch();
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        {/* <View>
                    <Text style={styles.title}>LOGIN SCREEN</Text>
                <Button
                    title={'Login'}
                    onPress={() => dispatch(login({
                        name:'Joe',
                        email:'joe@gmail.com'
                    }))}
                />
            </View> */}
        <Header text={"Sign In To Your Account"} />
        <View style={styles.componnetcontainer}>
        <Textfeild
        secureTextEntry={false}
          text={"Email"} />
        <Textfeild 
        secureTextEntry={true}
         text={"Password"} />
        </View>
        <View style={styles.forgetcontainer}>
            <Text style={styles.forgettext}>
            Forgot Password?
            </Text>
        </View>
        <View style={styles.btncontainer}>
            <Button containerStyle={styles.btn1container} textStyle={styles.btn1color} title="User"/>
            <Button containerStyle={styles.btn2container} textStyle={styles.btn2color} title="Driver"/>
        </View>
      </View>
    </ScreenWrapper>
  );
}
