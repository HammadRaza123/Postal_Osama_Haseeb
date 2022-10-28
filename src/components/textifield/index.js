import React from "react";
import { ActivityIndicator, Text, View, Image, TextInput } from "react-native";
import { useSelector } from "react-redux";
import { BackSvg, MessageSvg } from "~assets/svg";
import { selectAppLoader } from "~redux/slices/configSlice";
import AppColors from "~utills/AppColors";
import { width } from "~utills/Dimension";
import styles from "./styles";
export default function Textfeild({
  onChangeText,
  value,
  placeholder,
  text,
  secureTextEntry,
  textfeildStyles,
  keyboardType,
  firstIcon
}) {
  const appLoader = useSelector(selectAppLoader);
  return (
    <View style={styles.textfeildconatiner}>
      {firstIcon&&
      <View>
       {firstIcon}
      </View>}
      <View>
        <View>
          <Text>{text}</Text>
        </View>
        <View style={[styles.textinput1,textfeildStyles]}>
          <TextInput
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            placeholder={placeholder}
           />
        </View>
      </View>
    </View>
  );
}
