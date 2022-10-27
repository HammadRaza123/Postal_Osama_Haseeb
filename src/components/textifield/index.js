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
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "red",
        justifyContent:'space-between'
      }}
    >
      <View>
        <MessageSvg />
      </View>
      <View
        style={{
          backgroundColor: "blue",
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: width(0.5),
          borderColor: "black",
        }}
      >
        <View>
          <Text style={styles.text1}>{text}</Text>
          <TextInput
            style={styles.textinput}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
          />
        </View>
        <View>
          <MessageSvg />
        </View>
      </View>
    </View>
  );
}
