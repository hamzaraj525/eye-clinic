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
  Pressable,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import style from './style';
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';

const UploadUserData = ({navigation, route}) => {
  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
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
      age === '' ||
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
          age: age,
          Reports: '',
        })
        .then(() => {
          setLoader(false);
          navigation.navigate('HomeScreen');
          setUserName('');
          setAddress('');
          setEmail('');
          setPhone('');
          setAge('');
        })
        .catch(() => {
          setLoader(false);
        });
    }
  };

  //All JSX
  return (
    <SafeAreaView
      style={[
        style.container,
        {
          backgroundColor: 'rgb(135,199,239)',
        },
      ]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: '7%'}}
        contentContainerStyle={{paddingBottom: '10%'}}>
        <Pressable onPress={() => navigation.goBack()}>
          <Fontisto
            style={{marginTop: '6%'}}
            name="arrow-left-l"
            size={28}
            color={'rgb(55,83,108)'}
          />
        </Pressable>
        <Text style={style.boldTt}>New Patient</Text>
        <Text style={style.newUserTxt}>Create account</Text>

        <View style={style.parentContainer}>
          <Text style={style.inputHeader}>Name</Text>
          <TextInput
            value={userName}
            style={style.txtInput}
            onChangeText={text => setUserName(text)}
            placeholder="Enter Name"
            placeholderTextColor={'grey'}
          />
          <View style={style.borderLine} />
          <Text style={style.inputHeader}>Address</Text>
          <TextInput
            value={address}
            style={style.txtInput}
            onChangeText={text => setAddress(text)}
            placeholder="Enter Address"
            placeholderTextColor={'grey'}
          />
          <View style={style.borderLine} />

          <Text style={style.inputHeader}>Email</Text>
          <TextInput
            value={email}
            style={style.txtInput}
            onChangeText={text => setEmail(text)}
            placeholder="Enter Email"
            placeholderTextColor={'grey'}
          />
          <View style={style.borderLine} />
          <Text style={style.inputHeader}>Age</Text>
          <TextInput
            keyboardType="number-pad"
            value={age}
            style={style.txtInput}
            onChangeText={text => setAge(text)}
            placeholder="Enter Age"
            placeholderTextColor={'grey'}
          />

          <View style={style.borderLine} />
          <Text style={style.inputHeader}>Telephone</Text>
          <TextInput
            keyboardType="number-pad"
            value={phone}
            style={style.txtInput}
            onChangeText={text => setPhone(text)}
            placeholder="Enter Phone"
            placeholderTextColor={'grey'}
          />
          <View style={style.borderLine} />
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            postData();
          }}
          style={[style.loginBtn]}>
          {loader ? (
            <View style={style.loaderStyle}>
              <ActivityIndicator style={{}} size="small" color="black" />
            </View>
          ) : (
            <Text style={style.btnPost}>Post</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default UploadUserData;
