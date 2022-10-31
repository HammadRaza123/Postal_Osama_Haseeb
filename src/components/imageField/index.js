import React from "react";
import {
  Image,
  Text,
  TouchableOpacity, View
} from "react-native";
 import styles from "./styles";
export default function ImageField({
  text,
  textfeildStyles,
  firstIcon,
  secondIcon,
  textfeildconatinerStyles,
  onSecondIconPress,
  image='',
  imageText,onPress
}) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles.textfeildconatiner, textfeildconatinerStyles]}>
      {firstIcon && <View style={styles.icons}>{firstIcon}</View>}
      <View style={styles.secondView}>
        <View>
          <Text>{text}</Text>
          <View
            style={[
              styles.textinput1,
              textfeildStyles,
            ]}
          >
            {image != ''?
            <Image source={{uri:image}} resizeMode={'cover'} style={styles.image}
            /> :
            <View style={styles.textView}>
            <Text style={styles.text}>
              {imageText}
            </Text></View>
}
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
    </TouchableOpacity>
  );
}
