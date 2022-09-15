import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Easing} from 'react-native';
import SplashScreen from '../../Screens/Splash/SplashScreen';
import HomeScreen from '../../Screens/Home/HomeScreen';

import UploadUserData from '../../Screens/UploadUserData/UploadUserData';
import ReportDetail from '../../Screens/ReportDetail/ReportDetail';
import UploadPatientReport from '../../Screens/UploadPatientReport/UploadPatientReport';

const Stack = createNativeStackNavigator();

// LogBox.ignoreLogs([
//   'Non-serializable values were found in the navigation state',
//   "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
// ]);

function Navigation({}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        options={{header: () => null}}
        name="SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        options={{header: () => null}}
        name="HomeScreen"
        component={HomeScreen}
      />

      <Stack.Screen
        options={{header: () => null}}
        name="UploadUserData"
        component={UploadUserData}
      />
      <Stack.Screen
        options={{header: () => null}}
        name="UploadPatientReport"
        component={UploadPatientReport}
      />
      <Stack.Screen
        options={{header: () => null}}
        name="ReportDetail"
        component={ReportDetail}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.45,
    elevation: 5,
    shadowRadius: 3.5,
  },
  cartBtnBlue: {
    width: '10%',
    borderRadius: 100,
    height: 45,
    width: 45,
    backgroundColor: '#DA2328',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
