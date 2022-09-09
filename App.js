import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogBox, SafeAreaView, View, Image, StyleSheet} from 'react-native';
import Navigation from './src/Screens/Navigations/Navigation';

LogBox.ignoreAllLogs(true);

const RootStack = createNativeStackNavigator();

function App({}) {
  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator
          headerMode="none"
          screenOptions={{
            headerShown: false,
          }}>
          <RootStack.Screen name="Navigation" component={Navigation} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}
export default App;
const styles = StyleSheet.create({});
