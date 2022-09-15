import style from './style';
import FastImage from 'react-native-fast-image';
import Images from './../../Constraints/Images';
import React, {useEffect, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import Constraints from '../../Constraints/Constraints';
import database from '@react-native-firebase/database';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  Text,
  View,
  TextInput,
  Dimensions,
  Pressable,
  StatusBar,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {colors, cardColors} from './../../DataStore/TimeData';

function HomeScreen({navigation, route}) {
  const [input, setInput] = useState('');
  const [userKey, setUserKey] = useState('');
  const [list, setList] = useState([]);
  const [masterList, setMasterList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const searchFlter = text => {
    if (text) {
      setTimeout(() => {
        setLoader(false);
      }, 1200);

      const filterArray = masterList.filter((item, i) => {
        const itemData = item.userName
          ? item.userName.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setLoader(true);
      setList(filterArray);
    } else {
      setList(masterList);
    }
  };

  const getData = () => {
    setLoader(true);
    database()
      .ref('/usersData')
      .on('value', snapshot => {
        var li = [];
        snapshot.forEach(child => {
          console.log(child.val());
          li.push({
            key: child.key,
            address: child.val().address,
            email: child.val().email,
            userName: child.val().userName,
            phone: child.val().phone,
            Img: child.val().Img,
          });
        });
        setLoader(false);
        setList(li);
        setMasterList(li);
      });
  };

  const servicesHeader = () => {
    return (
      <>
        <View style={style.welcomeTxtBody}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <FastImage
              style={style.logo}
              source={Images.logo}
              resizeMode={FastImage.resizeMode.contain}
            />
            {showInput ? (
              <Animatable.View
                style={{backgroundColor: '#fff', borderRadius: 20}}
                useNativeDriver={true}
                duration={500}
                animation={'zoomIn'}>
                <TextInput
                  autoFocus={false}
                  value={input}
                  style={style.searchInput}
                  onChangeText={text => {
                    setInput(text);
                    searchFlter(text);
                  }}
                  placeholder="Search your ..."
                  placeholderTextColor={'grey'}
                  underlineColorAndroid="transparent"
                />
              </Animatable.View>
            ) : null}
            <Pressable
              onPress={() => {
                setShowInput(!showInput);
              }}>
              <Animatable.View
                useNativeDriver={true}
                delay={700}
                animation={'slideInRight'}>
                <AntDesign name="search1" size={24} color={'black'} />
              </Animatable.View>
            </Pressable>
          </View>
          <View style={style.welcomeTxtBodyLeft}>
            <View style={style.txt}>
              <View style={style.txtHeaderContainer}>
                <Text style={style.txtTitle}>{Constraints.CLINIC}</Text>
              </View>
              <Text style={style.txtSub}>{Constraints.SUBTITLE}</Text>
              <Text
                style={[
                  style.txtSub,
                  {
                    color: 'rgb(254,207,116)',
                  },
                ]}>
                {Constraints.SUBTITLE}
              </Text>
            </View>
          </View>
        </View>
        <Pressable
          style={style.uploadBtn}
          onPress={() => {
            navigation.navigate('UploadUserData');
          }}>
          <AntDesign name="cloudupload" size={22} color={'white'} />
        </Pressable>
      </>
    );
  };

  const renderServicesList = ({item, index}) => {
    let initial = item.userName
      .match(/\b(\w)/g)
      .join('')
      .toUpperCase();
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('UploadPatientReport', {Item: item});
        }}
        style={style.servicesContain}>
        <Animatable.View
          iterationCount={1}
          style={style.card}
          useNativeDriver={true}
          delay={index * 280}
          animation={'fadeInDown'}>
          <View style={style.picContainer}>
            <View
              style={[
                style.pic,
                {
                  backgroundColor: cardColors[index % cardColors.length],
                },
              ]}>
              <Text style={style.nameInitials}>{initial}</Text>
            </View>
          </View>

          <View style={style.cardSubContainer}>
            <View style={style.cardSub}>
              <Text style={style.name}>{item.userName}</Text>
              <Text style={style.adres}>{item.address}</Text>
              <Text style={style.adres}>{item.phone}</Text>
              <Text style={style.adres}>{item.email}</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={28}
              color={'grey'}
            />
          </View>
        </Animatable.View>
      </Pressable>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'rgb(247,245,246)'}}>
      <StatusBar hidden barStyle="light-content" backgroundColor={'#FED116'} />
      {servicesHeader()}
      {!loader ? (
        <>
          <FlatList
            data={list}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={renderServicesList}
            contentContainerStyle={{paddingBottom: 20}}
            keyExtractor={item => item.key}
          />
        </>
      ) : (
        <View style={{alignItems: 'center', marginTop: height / 4}}>
          <ActivityIndicator color={'#3372e2'} size={'large'} />
        </View>
      )}
    </View>
  );
}
export default HomeScreen;
