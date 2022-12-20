import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import style from './style';
import FastImage from 'react-native-fast-image';
import Constraints from '../../Constraints/Constraints';
import Fontisto from 'react-native-vector-icons/Fontisto';
import * as Animatable from 'react-native-animatable';
import Images from './../../Constraints/Images';
const {width, height} = Dimensions.get('window');
const PLACEHOLDER =
  'https://firebasestorage.googleapis.com/v0/b/eyeclinic-ce560.appspot.com/o/eyeClinicPics%2Faffd16fd5264cab9197da4cd1a996f820e601ee4.jpg?alt=media&token=409f2e06-72e6-45d9-a115-6983a0201e9c';

function ReportDetail({navigation, route}) {
  const {Items} = route.params;

  return (
    <View style={style.container}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 0}}
        showsVerticalScrollIndicato={false}
        showsHorizontalScrollIndicator={false}>
        <ImageBackground
          blurRadius={3}
          source={require('./../../../assets/Images/eee.jpg')}
          resizeMode="cover"
          style={style.backImg}>
          <View style={style.headerContain}>
            <Pressable
              style={style.btnBack}
              onPress={() => {
                navigation.goBack();
              }}>
              <Animatable.View useNativeDriver={true} animation={'slideInDown'}>
                <Fontisto
                  style={{marginTop: '2%'}}
                  name="arrow-left-l"
                  size={28}
                  color={'rgb(55,83,108)'}
                />
              </Animatable.View>
            </Pressable>
          </View>
          <View style={style.subParent3}>
            <View style={style.subParent2}>
              <View style={style.container2}>
                <Animatable.Text
                  useNativeDriver={true}
                  animation={'slideInDown'}
                  style={[style.headerTop]}>
                  {Constraints.PATIENTDETAILS}
                </Animatable.Text>
                <Animatable.Text
                  useNativeDriver={true}
                  animation={'slideInDown'}
                  style={style.headerSub}>
                  Date
                </Animatable.Text>

                <Animatable.Text
                  useNativeDriver={true}
                  animation={'slideInDown'}
                  style={style.header}>
                  {Items.fullDate}
                </Animatable.Text>
              </View>
              <View style={style.container2}>
                <Animatable.Text
                  useNativeDriver={true}
                  animation={'slideInDown'}
                  style={style.headerSub}>
                  Patient Name
                </Animatable.Text>

                <Animatable.Text
                  useNativeDriver={true}
                  animation={'slideInDown'}
                  style={style.header}>
                  {Items.PatientName}
                </Animatable.Text>
              </View>
              <View style={style.container2}>
                <Animatable.Text
                  useNativeDriver={true}
                  animation={'slideInDown'}
                  style={style.headerSub}>
                  Patient Age
                </Animatable.Text>

                <Animatable.Text
                  useNativeDriver={true}
                  animation={'slideInDown'}
                  style={style.header}>
                  {Items.PatientAge}
                </Animatable.Text>
              </View>
            </View>
            <Animatable.View
              useNativeDriver={true}
              delay={370}
              duration={1200}
              animation={'fadeIn'}>
              <FastImage
                style={{width: 110, height: 110}}
                source={Images.profile}
                resizeMode={FastImage.resizeMode.contain}
              />
            </Animatable.View>
          </View>
          <View style={style.line1} />
          <Animatable.Text
            useNativeDriver={true}
            delay={350}
            duration={1000}
            animation={'fadeIn'}
            style={[
              style.header2,
              {
                alignSelf: 'center',
                marginTop: 5,
                fontSize: 22,
                marginBottom: 9,
              },
            ]}>
            {Constraints.REFRACTIONCARD}
          </Animatable.Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Animatable.Text
              useNativeDriver={true}
              animation={'slideInLeft'}
              style={[style.header2, {marginTop: 1, fontSize: 20}]}>
              {Constraints.LEFT}
            </Animatable.Text>
            <Animatable.Text
              useNativeDriver={true}
              animation={'slideInRight'}
              style={[style.header2, {marginTop: 1, fontSize: 20}]}>
              {Constraints.RIGHT}
            </Animatable.Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              alignSelf: 'center',
              width: width,
            }}>
            <Animatable.View
              useNativeDriver={true}
              animation={'slideInLeft'}
              style={style.container2}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={style.sunParenttable}>
                  <Text style={style.header2}>{Constraints.SPH}</Text>
                  <View style={[style.line, {height: 3}]} />
                  <Text style={[style.header3]}>{Items.leftSPH}</Text>
                </View>
                <View style={style.sunParenttable}>
                  <Text style={style.header2}>{Constraints.CYL}</Text>
                  <View style={[style.line, {height: 3}]} />
                  <Text style={[style.header3]}> {Items.leftCYL}</Text>
                </View>
                <View style={style.sunParenttable}>
                  <Text style={style.header2}>{Constraints.AXIS}</Text>
                  <View style={[style.line, {height: 3}]} />
                  <Text style={[style.header3]}> {Items.leftAXIS}</Text>
                </View>
                <View style={style.sunParenttable}>
                  <Text style={style.header2}>{Constraints.VA}</Text>
                  <View style={[style.line, {height: 3}]} />
                  <Text style={[style.header3]}> {Items.leftVA}</Text>
                </View>
              </View>
            </Animatable.View>
            <Animatable.View
              useNativeDriver={true}
              animation={'slideInRight'}
              style={style.container2}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={style.sunParenttable}>
                  <Text style={style.header2}>{Constraints.SPH}</Text>
                  <View style={[style.line, {height: 3}]} />
                  <Text style={[style.header3]}> {Items.rightSPH}</Text>
                </View>
                <View style={style.sunParenttable}>
                  <Text style={style.header2}>{Constraints.CYL}</Text>
                  <View style={[style.line, {height: 3}]} />
                  <Text style={[style.header3]}> {Items.rightCYL} </Text>
                </View>
                <View style={style.sunParenttable}>
                  <Text style={style.header2}>{Constraints.AXIS}</Text>
                  <View style={[style.line, {height: 3}]} />
                  <Text style={[style.header3]}> {Items.rightAXIS} </Text>
                </View>
                <View style={style.sunParenttable}>
                  <Text style={style.header2}>{Constraints.VA}</Text>
                  <View style={[style.line, {height: 3}]} />
                  <Text style={[style.header3]}>{Items.rightVA}</Text>
                </View>
              </View>
            </Animatable.View>
          </View>

          <View style={style.line1} />
          <View style={style.subParent3}>
            <View style={style.subParent2}>
              <View style={style.container2}>
                <Animatable.Text
                  useNativeDriver={true}
                  delay={400}
                  duration={1000}
                  animation={'fadeIn'}
                  style={[style.headerTop]}>
                  {Constraints.DIAGNOSIS}
                </Animatable.Text>
                <Animatable.Text
                  useNativeDriver={true}
                  delay={600}
                  duration={1200}
                  animation={'fadeIn'}
                  style={[style.answer]}>
                  {Items.diagnosis}
                </Animatable.Text>
              </View>
            </View>
          </View>
          <View style={style.line1} />
          <View style={style.subParent3}>
            <View style={style.subParent2}>
              <View style={style.container2}>
                <Animatable.Text
                  useNativeDriver={true}
                  delay={700}
                  duration={1200}
                  animation={'fadeIn'}
                  style={[style.headerTop]}>
                  {Constraints.TREATMENT}
                </Animatable.Text>
                <Animatable.Text
                  useNativeDriver={true}
                  delay={600}
                  duration={1200}
                  animation={'fadeIn'}
                  style={[style.answer]}>
                  {Items.treatment}
                </Animatable.Text>
              </View>
            </View>
          </View>
          <View style={style.line1} />
          <Animatable.View
            style={{
              marginTop: '6%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            useNativeDriver={true}
            delay={370}
            duration={1300}
            animation={'fadeIn'}>
            <FastImage
              style={{width: '85%', height: height / 2, borderRadius: 30}}
              source={{
                uri: Items.imageUpload ? Items.imageUpload : PLACEHOLDER,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </Animatable.View>
          <View style={style.line1} />
        </ImageBackground>
      </ScrollView>
    </View>
  );
}
export default ReportDetail;
