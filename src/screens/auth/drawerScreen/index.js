import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
 import { Button, Header, ScreenWrapper, TextField  } from "~components";
import Drawer from "react-native-drawer";
import { height, width } from "~utills/Dimension";
  export default function DrawerScreen({ navigation ,route}) {
  const dispatch = useDispatch();
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
      <Drawer
   content={<ControlPanel />}
  tapToClose={true}
  openDrawerOffset={0.2} // 20% gap on the right side of drawer
  panCloseMask={0.2}
  closedDrawerOffset={-3}
  styles={styles.drawer}
  tweenHandler={(ratio) => ({
    main: { opacity:(2-ratio)/2 }
  })}
  >
    <Main />
</Drawer>
               </View>
    </ScreenWrapper>
  );
}
