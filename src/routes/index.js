import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { Accountvarification,DrawerScreen,LoginScreen, Onboarding,Resetpassword,Signup,Splash } from '~screens/auth';
import { Loader } from '~components';
import { selectIsLogin } from '~redux/slices/authSlice';
import ScreenNames from './routes';
import { HomeScreen } from '~screens/app';
import SplashScreen from 'react-native-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export default function Routes() {
  const isLogin = useSelector(selectIsLogin)
  React.useEffect(() => {
    SplashScreen.hide()
  }, [])
  
  return (
    <NavigationContainer>
      <Loader />
      {!isLogin ? (
        <Stack.Navigator initialRouteName={ScreenNames.SPLASH} screenOptions={{ header: () => false }}>
          <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
          <Stack.Screen name={ScreenNames.SPLASH} component={Splash} />
          <Stack.Screen name={ScreenNames.ONBOARDING} component={Onboarding} />
          <Stack.Screen name={ScreenNames.RESETPASSWORD} component={Resetpassword} />
          <Stack.Screen name={ScreenNames.SIGNUP} component={Signup} />
          <Stack.Screen name={ScreenNames.ACCOUNTVARIFICATION} component={Accountvarification} />
          <Stack.Screen name={ScreenNames.DRAWERSCREEN} component={DrawerScreen} />
           </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName={ScreenNames.HOME} screenOptions={{ header: () => false }}>
          <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}