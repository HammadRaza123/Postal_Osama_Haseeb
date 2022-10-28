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
}) {
  const appLoader = useSelector(selectAppLoader);
  return (
    <View style={styles.textfeildconatiner}>
      <View>
        <MessageSvg />
      </View>
      <View>
        <View>
          <Text>{text}</Text>
        </View>
        <View style={styles.textinput1}>
          <TextInput
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={true}
          />
        </View>
      </View>
    </View>
  );
}
