import React, {useState, useRef, useEffect} from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import NetInfo from '@react-native-community/netinfo';
import Images from '../../Constraints/Images';
function SplashScreen({navigation}) {
  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected === true) {
        setTimeout(() => {
          navigation.replace('HomeScreen');
        }, 1700);
      } else {
        setTimeout(() => {
          alert('Internet Connection is Not good');
        }, 3000);
      }
      console.log('Is connected?', state.isConnected);
    });
  };

  return (
    <SafeAreaView style={[styles.container, {}]}>
      <StatusBar
        barStyle={'dark-content'}
        hidden={true}
        backgroundColor="#0E0A30"
      />
      <View
        style={{
          width: Dimensions.get('window').width,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <FastImage
            style={styles.image}
            source={Images.logo}
            resizeMode={FastImage.resizeMode.contain}
          />

          <Text
            style={{
              fontSize: 32,
              color: 'black',
              marginTop: 7,
            }}>
            Eye Clinic
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              marginTop: 5,
            }}>
            Have Healthy Eyes
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 90,
    height: 90,
  },
});
