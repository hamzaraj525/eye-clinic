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
      .ref('usersData/')
      .on('value', snapshot => {
        var li = [];
        snapshot.forEach(child => {
          console.log('All Data----' + child.val());
          li.push({
            key: child.key,
            Reports: child.val().Reports,
            phone: child.val().phone,
            userName: child.val().userName,
            address: child.val().address,
            age: child.val().age,
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
          {item.Reports.map(el => {
            return (
              <Text
                style={[
                  style.timeTitle,
                  {
                    color: index % 2 ? 'white' : 'black',
                  },
                ]}>
                {el.fullDate}
              </Text>
            );
          })}

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
    <View style={style.container}>
      <StatusBar
        hidden={false}
        barStyle="light-content"
        backgroundColor={'#000000aa'}
      />
      <ScrollView>
        {/* <View style={style.header}>
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
        </View> */}
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
      </ScrollView>
    </View>
  );
}
export default UploadPatientReport;
