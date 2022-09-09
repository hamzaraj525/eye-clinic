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
      phone.length > 11 ||
      image === null
    ) {
      alert('Please fill all the fields');
    } else {
      const imageUpload = await uploadImage();
      newReference
        .set({
          key: newReference.key,
          userName: userName,
          address: address,
          email: email,
          phone: phone,
          Img: imageUpload,
        })
        .then(() => {
          setLoader(false);
        });
      setUserName('');
      setAddress('');
      setEmail('');
      setPhone('');
      setImage(null);
    }
  };

  //Choose photo from gallery
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    })
      .then(image => {
        console.log('image is here-----' + image.sourceURL);
        const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
        setImage(imageUri);
      })
      .catch(error => {
        console.log(error);
      });
  };

  //will upload to Firebase storage and make a link of Image
  const uploadImage = async () => {
    if (image == null) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;
    setUploading(true);
    setTransferred(0);
    const storageRef = storage().ref(`eyeClinicPics/${filename}`);
    const task = storageRef.putFile(uploadUri);
    // Set transferred state
    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );
      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });
    try {
      await task;
      const url = await storageRef.getDownloadURL();
      setUploading(false);
      console.log('url==' + url);

      setImage(url);
      return url;
      console.log('url here' + url);
    } catch (e) {
      console.log(e);
      return null;
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
      {uploading || loader ? (
        <View style={style.loaderStyle}>
          <ActivityIndicator style={{}} size="large" color="#0000ff" />
          <Text style={style.uploadTxt}>{transferred}% Uplaoding...</Text>
        </View>
      ) : (
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
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={choosePhotoFromLibrary}
            style={{
              backgroundColor: '#EDF6FF',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 10,
              borderRadius: 110 / 2,
              width: 110,
              height: 110,
            }}>
            {image === null ? (
              <MaterialCommunityIcons name="camera" size={28} color={'grey'} />
            ) : (
              <Image
                source={{uri: image}}
                style={{
                  borderRadius: 10,
                  width: 110,
                  height: 110,
                }}
              />
            )}
          </TouchableOpacity>
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
            <MaterialCommunityIcons
              name="google-maps"
              size={20}
              color={'grey'}
            />
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
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Post
            </Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
export default UploadUserData;
