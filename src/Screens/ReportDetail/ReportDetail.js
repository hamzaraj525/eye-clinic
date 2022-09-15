import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
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

function ReportDetail({navigation, route}) {
  const {Items} = route.params;

  return (
    <View style={style.container}>
      <ScrollView contentContainerStyle={{paddingBottom: 25}}>
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
                22/02/2022
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
                Ali Khan
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
                22
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
            {alignSelf: 'center', marginTop: 5, fontSize: 22, marginBottom: 9},
          ]}>
          {Constraints.REFRACTIONCARD}
        </Animatable.Text>
        <View style={style.subParent}>
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
                  <Text style={[style.header3]}>33</Text>
                </View>
                <View style={style.sunParenttable}>
                  <Text style={style.header2}>{Constraints.CYL}</Text>
                  <View style={[style.line, {height: 3}]} />
                  <Text style={[style.header3]}>33</Text>
                </View>
                <View style={style.sunParenttable}>
                  <Text style={style.header2}>{Constraints.AXIS}</Text>
                  <View style={[style.line, {height: 3}]} />
                  <Text style={[style.header3]}>23</Text>
                </View>
                <View style={style.sunParenttable}>
                  <Text style={style.header2}>{Constraints.VA}</Text>
                  <View style={[style.line, {height: 3}]} />
                  <Text style={[style.header3]}>12</Text>
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
                  <Text style={[style.header3]}>21</Text>
                </View>
                <View style={style.sunParenttable}>
                  <Text style={style.header2}>{Constraints.CYL}</Text>
                  <View style={[style.line, {height: 3}]} />
                  <Text style={[style.header3]}>33</Text>
                </View>
                <View style={style.sunParenttable}>
                  <Text style={style.header2}>{Constraints.AXIS}</Text>
                  <View style={[style.line, {height: 3}]} />
                  <Text style={[style.header3]}>18 </Text>
                </View>
                <View style={style.sunParenttable}>
                  <Text style={style.header2}>{Constraints.VA}</Text>
                  <View style={[style.line, {height: 3}]} />
                  <Text style={[style.header3]}>12</Text>
                </View>
              </View>
            </Animatable.View>
          </View>
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
                he got some illness due to lack of sph in right eye he got some
                illness due to lack of sph in right eye
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
                he got some illness due to lack of sph in right eye he got some
                illness due to lack of sph in right eye
              </Animatable.Text>
            </View>
          </View>
        </View>
        <View style={style.line1} />
        <Animatable.View
          useNativeDriver={true}
          delay={370}
          duration={1300}
          animation={'fadeIn'}>
          <FastImage
            style={{width: width, height: height / 2}}
            source={Images.placeHolderImg}
            resizeMode={FastImage.resizeMode.contain}
          />
        </Animatable.View>
        <View style={style.line1} />
      </ScrollView>
    </View>
  );
}
export default ReportDetail;
