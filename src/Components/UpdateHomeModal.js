import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  ActivityIndicator,
  Animated,
  ToastAndroid,
  Image,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from 'react-native';
import style from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
const {width, height} = Dimensions.get('window');

const UpdateHomeModal = props => {
  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const updaterData = async () => {
    if (
      userName.length > 0 ||
      address.length > 0 ||
      email.length > 0 ||
      phone.length > 0 ||
      image !== null
    ) {
      setLoading(true);
      const imageUpload = await uploadImage();
      database()
        .ref('usersData/' + props.userKey)
        .update({
          userName: userName,
          address: address,
          email: email,
          phone: phone,
          Img: imageUpload,
        })
        .then(() => {
          props.hideMailModal();
          setLoading(false);
          console.log('---------updated.');
          image === null;
        })
        .catch(() => {
          alert('Some error occured');
        });
    } else {
      alert('Fields Required');
    }
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
  return (
    <>
      <StatusBar hidden={true} barStyle="default" backgroundColor={'#FED116'} />

      <Modal
        animationType="fade"
        transparent={true}
        visible={props.showModal}
        onRequestClose={() => {
          props.hideMailModal();
        }}>
        <SafeAreaView style={style.container}>
          <Animated.View style={style.containerr}>
            <View style={style.whiteContainer}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={choosePhotoFromLibrary}
                style={style.imgBtn}>
                {image === null ? (
                  <MaterialCommunityIcons
                    name="camera"
                    size={28}
                    color={'grey'}
                  />
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
              <View style={style.passwordContainer}>
                <TextInput
                  autoFocus={false}
                  style={style.TiName}
                  value={userName}
                  onChangeText={text => {
                    setUserName(text);
                  }}
                  placeholder="Enter Name"
                  placeholderTextColor={'grey'}
                />
              </View>
              <View style={style.passwordContainer}>
                <TextInput
                  autoFocus={false}
                  style={style.TiName}
                  value={address}
                  onChangeText={text => {
                    setAddress(text);
                  }}
                  placeholder="Enter Address"
                  placeholderTextColor={'grey'}
                />
              </View>
              <View style={style.passwordContainer}>
                <TextInput
                  autoFocus={false}
                  style={style.TiName}
                  value={email}
                  onChangeText={text => {
                    setEmail(text);
                  }}
                  placeholder="Enter Email"
                  placeholderTextColor={'grey'}
                />
              </View>
              <View style={style.passwordContainer}>
                <TextInput
                  keyboardType="numeric"
                  autoFocus={false}
                  style={style.TiName}
                  value={phone}
                  onChangeText={text => {
                    setPhone(text);
                  }}
                  placeholder="Enter Phone"
                  placeholderTextColor={'grey'}
                />
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={style.loginBtn}
                onPress={() => {
                  updaterData();
                }}>
                {loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={style.okBtnTxt}>Done</Text>
                )}
              </TouchableOpacity>
            </View>
          </Animated.View>
        </SafeAreaView>
      </Modal>
    </>
  );
};
export default UpdateHomeModal;
