import React from "react";
import {
  ActivityIndicator,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
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
  firstIcon,
  secondIcon,
  textfeildconatinerStyles,
  onSecondIconPress,
}) {
  return (
    <View style={[styles.textfeildconatiner, textfeildconatinerStyles]}>
      {firstIcon && <View style={styles.icons}>{firstIcon}</View>}
      <View style={styles.secondView}>
        <View>
          <Text>{text}</Text>
          <View
            style={[
              styles.textinput1,
              { width: secondIcon ? width(78) : width(84) },
              textfeildStyles,
            ]}
          >
            <TextInput
              onChangeText={onChangeText}
              value={value}
              secureTextEntry={secureTextEntry}
              keyboardType={keyboardType}
              placeholder={placeholder}
            />
          </View>
        </View>
        {secondIcon && (
          <TouchableOpacity
            onPress={onSecondIconPress}
            activeOpacity={0.9}
            style={[styles.icons, { alignItems: "flex-end" }]}
          >
            {secondIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
