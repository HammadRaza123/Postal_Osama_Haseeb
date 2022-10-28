import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
 import { Button, Header, ScreenWrapper, TextField  } from "~components";
  export default function Accountvarification({ navigation ,route}) {
  const dispatch = useDispatch();
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <View style={styles.text1}>
          <Text style={styles.text1style}>Varify Your Account</Text>
        </View>
        <View style={styles.text2style}>
          <Text>We sent you a 4 digit verification code on your phone number. Please enter the code below to verify your account.</Text>
         </View> 
          <View style={styles.textfeildconatainer}>
            <TextField
            numeric={true}
             textfeildStyles={styles.innerwidth}
             keyboardType={"phone-pad"}
             />
            <TextField
            textfeildStyles={styles.innerwidth}
            keyboardType={"phone-pad"}
             />
            <TextField
            textfeildStyles={styles.innerwidth}
            keyboardType={"phone-pad"}
             />
            <TextField
            textfeildStyles={styles.innerwidth}
            keyboardType={"phone-pad"}
             />
          </View>
          <View>
            <Button
            containerStyle={styles.btncontainer}
            textStyle={styles.btntext}
            title={"Verify"}
            />
          </View>
      </View>
    </ScreenWrapper>
  );
}
