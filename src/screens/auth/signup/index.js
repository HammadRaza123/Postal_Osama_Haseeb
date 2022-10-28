import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
 import { Button, Header, ScreenWrapper, TextField  } from "~components";
     export default function Signup({ navigation:{goBack},route}) {
  const dispatch = useDispatch();
  return (
    <ScrollView>
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <Header
          onPress={() => goBack()}
          text={"Sign Up"}
        />
        <View style={styles.nametextcontainer}>
          <TextField
          textfeildStyles={styles.namestyle}
          text={"First Name"}/>
          <TextField
          textfeildStyles={styles.namestyle}
          text={"Last Name"}/>
       </View>
       <View style={styles.textfeildstyle}>
        <TextField
        text={"Email"}
        />
        </View>
        <View style={styles.textfeildstyle}>
          <TextField
          text={"Phone Number"}/>
        </View>
        <View style={styles.textfeildstyle}>
          <TextField
          text={"Password"}/>
        </View>
        <View style={styles.textfeildstyle}>
          <TextField
          text={"Confirm password"}/>
        </View>
        <View style={styles.btncontaine1}>
         <Button containerStyle={styles.btn1color}
          title={"User"}
          />
          <Button containerStyle={styles.btn2color}
          title={"Driver"}
          />
         </View>
          
         <View style={styles.btncontainertwo}>
          <Button
            containerStyle={styles.btn3}
            textStyle={styles.btn3text}
            title="Sign Up"
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
          
      </View>
    </ScreenWrapper>
    </ScrollView>
  );
}
