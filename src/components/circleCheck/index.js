import React from "react";
import {
  ActivityIndicator,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native"; 
import AppColors from "~utills/AppColors";
import styles from "./styles";
export default function CircleCheck({ text, onPress, selected = false }) {
   return (
    <View style={styles.headerconatiner}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.circle,
          { backgroundColor: selected ? AppColors.black : AppColors.gray },
        ]}
      >
        <Text style={{ color: AppColors.white }}>✓</Text>
      </TouchableOpacity>
      <Text style={styles.text1style}>{text}</Text>
    </View>
  );
}
