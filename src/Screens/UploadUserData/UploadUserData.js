import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
  ActivityIndicator,
  Text,
  Image,
  TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import style from './style';
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';

const UploadUserData = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [loader, setLoader] = useState(false);

  //will post data to realTime Database
  const postData = async () => {
    const newReference = database().ref('/usersData').push();
    if (
      userName === '' ||
      address === '' ||
      email === '' ||
      phone === '' ||
      phone.length !== 11
    ) {
      alert('Please fill all the fields');
    } else {
      setLoader(true);
      newReference
        .set({
          key: newReference.key,
          userName: userName,
          address: address,
          email: email,
          phone: phone,
        })
        .then(() => {
          setLoader(false);
        })
        .catch(() => {
          setLoader(false);
        });
      setUserName('');
      setAddress('');
      setEmail('');
      setPhone('');
    }
  };

  //All JSX
  return (
    <SafeAreaView
      style={[
        style.container,
        {
          backgroundColor: 'white',
        },
      ]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 20}}
        contentContainerStyle={{}}>
        <Text
          style={{
            marginBottom: '7%',
            marginTop: '7%',
            fontSize: 25,
            fontWeight: 'bold',
            color: 'magenta',
          }}>
          New User
        </Text>

        <View style={[style.passwordContainer, {width: '69%'}]}>
          <MaterialCommunityIcons name="pencil" size={20} color={'grey'} />
          <TextInput
            value={userName}
            style={{width: '90%', marginLeft: 6, height: 45}}
            onChangeText={text => setUserName(text)}
            placeholder="Enter Name"
            placeholderTextColor={'#000'}
          />
        </View>
        <View style={[style.passwordContainer, {width: '75%'}]}>
          <MaterialCommunityIcons name="google-maps" size={20} color={'grey'} />
          <TextInput
            value={address}
            style={{width: '90%', marginLeft: 6, height: 45}}
            onChangeText={text => setAddress(text)}
            placeholder="Enter Address"
            placeholderTextColor={'#000'}
          />
        </View>
        <View
          style={[
            style.passwordContainer,
            {
              width: '81%',
              alignSelf: 'flex-start',
              backgroundColor: '#F6F3F5',
            },
          ]}>
          <MaterialCommunityIcons name="email" size={20} color={'grey'} />
          <TextInput
            value={email}
            style={{width: '90%', marginLeft: 6, height: 45}}
            onChangeText={text => setEmail(text)}
            placeholder="Enter Email"
            placeholderTextColor={'#000'}
          />
        </View>

        <View style={[style.passwordContainer, {width: '89%'}]}>
          <MaterialCommunityIcons name="phone" size={20} color={'grey'} />
          <TextInput
            keyboardType="number-pad"
            value={phone}
            style={{width: '90%', marginLeft: 6, height: 45}}
            onChangeText={text => setPhone(text)}
            placeholder="Enter Phone"
            placeholderTextColor={'#000'}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            postData();
          }}
          style={[
            style.loginBtn,
            {
              marginTop: 15,
              backgroundColor: '#FB5B64',
            },
          ]}>
          {loader ? (
            <View style={style.loaderStyle}>
              <ActivityIndicator style={{}} size="small" color="white" />
            </View>
          ) : (
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Post
            </Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default UploadUserData;
