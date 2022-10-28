import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { login } from "~redux/slices/authSlice";
import { Button, Header, ScreenWrapper, TextField  } from "~components";
 import ScreenNames from "~routes/routes";
import { MessageSvg } from "~assets/svg";
export default function Resetpassword({ navigation:{goBack},route}) {
  const dispatch = useDispatch();
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <Header
          onPress={() => goBack()}
          text={"Reset Your Password"}
        />
        <View style={styles.text1style}>
          <Text>Enter your email and we'll send you a link to reset your password</Text>
        </View> 
          <View style={styles.textfieldconatiner}>
            <TextField
            text={"Email"}
            />
          </View>
          <View>
            <Button
            containerStyle={styles.btncontainer}
            textStyle={styles.btntext}
            title={"Sign in"}
            />
          </View>
      </View>
    </ScreenWrapper>
  );
}
