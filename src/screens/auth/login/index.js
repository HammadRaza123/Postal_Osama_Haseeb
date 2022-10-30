import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { login } from "~redux/slices/authSlice";
import { Button, ScreenWrapper,Header, TextField } from "~components";
import ScreenNames from "~routes/routes";
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
        <Header
        onPress={() => navigation.navigate(ScreenNames.SPLASH)}
        text={"Sign In To Your Account"}
        />
        <View style={styles.componnetcontainer}>
          <TextField text={"Email"} />
          <TextField text={"Password"} secureTextEntry={false} />
        </View>
        <View style={styles.forgetcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate(ScreenNames.RESETPASSWORD)}>
          <Text style={styles.forgettext}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btncontainer}>
          <Button
            containerStyle={styles.btn1container}
            textStyle={styles.btn1color}
            title="User"
          />
          <Button
            containerStyle={styles.btn2container}
            textStyle={styles.btn2color}
            title="Driver"
            onPress={() => navigation.navigate(ScreenNames.DRAWERSCREEN)}
          />
        </View>
        <View style={styles.btncontainertwo}>
          <Button
            containerStyle={styles.btn3}
            textStyle={styles.btn3text}
            title="Sign In"
          />
          <Button
            containerStyle={styles.btn4}
            textStyle={styles.btn4text}
            title="Sign In with Google"
          />
          <Button
            containerStyle={styles.btn4}
            textStyle={styles.btn4text}
            title="Sign In with Facebook"
          />
        </View>
        <View style={styles.signupcontainer}>
          <Text style={styles.accounttextcolor}>Don't have an account</Text>
          <Button
          onPress={() => navigation.navigate(ScreenNames.SIGNUP)}
            containerStyle={styles.btn4}
            textStyle={styles.btn4text}
            title="Sign Up"
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
