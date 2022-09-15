import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Alert,
  FlatList,
  StatusBar,
  Pressable,
  BackHandler,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import style from './style';
import time from '../../DataStore/TimeData';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Constraints from '../../Constraints/Constraints';
import {colors, cardLength} from './../../DataStore/TimeData';
import ReportUploadModal from '../../Components/ReportUploadModal';
import * as Animatable from 'react-native-animatable';
import database from '@react-native-firebase/database';
import FastImage from 'react-native-fast-image';
import images from './../../Constraints/Images';
const {width, height} = Dimensions.get('window');

function UploadPatientReport({navigation, route}) {
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  const [loader, setLoader] = useState(false);
  const [colorId, setColorId] = useState('');
  const [date, setDate] = useState(new Date());
  const [timeTitle, setTimeTitle] = useState('9:00 AM');
  const [list, setList] = useState([]);
  const {Item} = route.params;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoader(true);
    database()
      .ref('usersData/' + Item.key + '/Reports')
      .on('value', snapshot => {
        var li = [];
        snapshot.forEach(child => {
          li.push({
            key: child.key,
            diagnosis: child.val().diagnosis,
            fullDate: child.val().fullDate,
            leftAXIS: child.val().leftAXIS,
            leftCYL: child.val().leftCYL,
            leftSPH: child.val().leftSPH,
            leftVA: child.val().leftVA,
            rightAXIS: child.val().rightAXIS,
            rightCYL: child.val().rightCYL,
            rightSPH: child.val().rightSPH,
            rightVA: child.val().rightVA,
            treatment: child.val().treatment,
            imageUpload: child.val().imageUpload,
          });
        });

        setLoader(false);
        setList(li);
      });
  };

  const onPress = item => {
    navigation.navigate('ReportDetail', {Items: item});
  };

  const hideMailModal = () => {
    setShowModal(false);
  };

  const header = ({item, index}) => {
    return (
      <>
        {/* <Text style={style.scheduleSubTitle}>
          {Constraints.SCHEDULE_subTitle}
        </Text> */}
        <Text style={[style.titleSchedule, {fontSize: 35, marginTop: 5}]}>
          {Constraints.SCHEDULE}
        </Text>
      </>
    );
  };

  const renderTime = ({item, index}) => {
    return (
      <Animatable.View
        iterationCount={1}
        useNativeDriver={true}
        delay={index * 20}
        animation={'slideInLeft'}
        style={[
          style.parent,
          {
            width: cardLength[index % cardLength.length],
          },
        ]}>
        <Pressable
          style={[
            style.red,
            {
              width: cardLength[index % cardLength.length],
              backgroundColor: colors[index % colors.length],
            },
          ]}
          onPress={() => {
            onPress(item);
          }}>
          <Text
            style={[
              style.timeTitle,
              {
                color: index % 2 ? 'white' : 'black',
              },
            ]}>
            {item.fullDate}
          </Text>

          {/* <Text
            style={[
              style.timeTitle,
              {
                color: index % 2 ? 'white' : 'black',
              },
            ]}>
            {item.title}
          </Text> */}

          <View
            style={[
              style.bottomLine,
              {
                backgroundColor: index % 2 ? 'white' : 'black',
              },
            ]}
          />
        </Pressable>
      </Animatable.View>
    );
  };

  return (
    <View
      style={[
        style.container,
        {
          backgroundColor: list.length > 0 ? 'rgb(108, 187, 154)' : 'white',
        },
      ]}>
      <StatusBar
        hidden={false}
        barStyle="light-content"
        backgroundColor={'#000000aa'}
      />
      <ScrollView>
        {list.length > 0 ? (
          <>
            <View style={style.header}>
              <Pressable
                style={style.btnBack}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Fontisto
                  style={{marginTop: '2%'}}
                  name="arrow-left-l"
                  size={28}
                  color={'rgb(55,83,108)'}
                />
              </Pressable>
              <Pressable
                style={[style.uploadBtn, {}]}
                onPress={() => {
                  setShowModal(true);
                }}>
                <Entypo name="plus" size={22} color={'rgb(55,83,108)'} />
              </Pressable>
            </View>

            <FlatList
              data={list}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={renderTime}
              ListHeaderComponent={header}
              contentContainerStyle={{paddingBottom: 20}}
              ListHeaderComponentStyle={{
                paddingHorizontal: '6%',
                marginBottom: '4%',
              }}
              keyExtractor={item => item.key}
            />
            <ReportUploadModal
              patientKey={Item.key}
              showModal={showModal}
              navigation={navigation}
              hideMailModal={hideMailModal}
            />
          </>
        ) : (
          <>
            <View style={style.header}>
              <Pressable
                style={style.btnBack}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Fontisto
                  style={{marginTop: '6%'}}
                  name="arrow-left-l"
                  size={28}
                  color={'rgb(55,83,108)'}
                />
              </Pressable>
            </View>
            <FastImage
              style={{width: width, height: height / 1.8}}
              source={images.placeHolderImg}
              resizeMode={FastImage.resizeMode.contain}
            />
            <View style={{alignItems: 'center'}}>
              <Text style={style.titleSchedule}>{Constraints.UPLOADTXT}</Text>
              <Text style={style.titleSub}>{Constraints.UPLOADSUBTXT}</Text>
              <Text style={style.titleSub2}>{Constraints.UPLOADSUBTXT2}</Text>
              <Pressable
                style={style.uploadBtn}
                onPress={() => {
                  setShowModal(true);
                }}>
                <Entypo name="plus" size={22} color={'black'} />
              </Pressable>
            </View>
            <ReportUploadModal
              patientKey={Item.key}
              showModal={showModal}
              navigation={navigation}
              hideMailModal={hideMailModal}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
}
export default UploadPatientReport;
