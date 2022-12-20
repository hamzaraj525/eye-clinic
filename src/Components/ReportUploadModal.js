import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  ActivityIndicator,
  Animated,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  StatusBar,
  ScrollView,
} from 'react-native';
import style from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
const {width, height} = Dimensions.get('window');

const ReportUploadModal = props => {
  const [rightSPH, setRightSPH] = useState('');
  const [rightCYL, setRightCYL] = useState('');
  const [rightAXIS, setRightAXIS] = useState('');
  const [rightVA, setRightVA] = useState('');
  const [leftSPH, setLeftSPH] = useState('');
  const [leftCYL, setLeftCYL] = useState('');
  const [leftAXIS, setLeftAXIS] = useState('');
  const [leftVA, setLeftVA] = useState('');
  const [treatment, setTreatment] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const uriImage = {
    uri: 'https://img.freepik.com/premium-vector/eye-clinic-appointment-illustration-optometrist-checking-kid-eyesight-with-spectacles-medical-equipment-girl-cartoon-character-ophthalmology-hospital_575670-663.jpg?w=1800',
  };

  let todayDate = new Date();
  let day = todayDate.getDate();
  let month = todayDate.getMonth();
  let year = todayDate.getFullYear();
  const fullDate = day + '/' + month + '/' + year;

  const PatientName = props.patientName;
  const PatientAge = props.patientAge;

  const updaterData = async () => {
    setLoading(true);
    const imageUpload = await uploadImage();
    database()
      .ref('usersData/' + props.patientKey + '/Reports')
      .push({
        fullDate,
        rightSPH,
        rightCYL,
        rightAXIS,
        rightVA,
        leftSPH,
        leftCYL,
        leftAXIS,
        leftVA,
        treatment,
        diagnosis,
        imageUpload,
        PatientName,
        PatientAge,
      })
      .then(() => {
        props.hideMailModal();
        setLoading(false);
        image === null;
        rightSPH === null;
        rightCYL === null;
        rightAXIS === null;
        rightVA === null;
        leftSPH === null;
        leftCYL === null;
        leftAXIS === null;
        leftVA === null;
        treatment === null, diagnosis === null;
        image === null;
      })
      .catch(() => {
        setLoading(false);
        alert('Some error occured');
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.showModal}
        onRequestClose={() => {
          props.hideMailModal();
        }}>
        <View style={style.whiteContainer}>
          <ImageBackground
            blurRadius={55}
            source={uriImage}
            resizeMode="cover"
            style={style.backImg}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: '10%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={choosePhotoFromLibrary}
                style={style.imgBtn}>
                {image === null ? (
                  <FontAwesome5 name="camera-retro" size={28} color={'black'} />
                ) : (
                  <Image
                    resizeMode="contain"
                    source={{uri: image}}
                    style={style.img}
                  />
                )}
              </TouchableOpacity>
              <View style={style.HeaderContainer}>
                <Text style={style.titleHeader}>Right Eye</Text>
                <FontAwesome5
                  name="eye"
                  size={18}
                  style={{marginLeft: 10}}
                  color={'black'}
                />
              </View>
              <View style={style.passwordContainer}>
                <TextInput
                  keyboardType="numeric"
                  autoFocus={false}
                  style={style.TiName}
                  value={rightSPH}
                  onChangeText={text => {
                    setRightSPH(text);
                  }}
                  placeholder="Enter SPH"
                  placeholderTextColor={'grey'}
                />
              </View>
              <View style={style.passwordContainer}>
                <TextInput
                  keyboardType="numeric"
                  autoFocus={false}
                  style={style.TiName}
                  value={rightCYL}
                  onChangeText={text => {
                    setRightCYL(text);
                  }}
                  placeholder="Enter CYL"
                  placeholderTextColor={'grey'}
                />
              </View>
              <View style={style.passwordContainer}>
                <TextInput
                  keyboardType="numeric"
                  autoFocus={false}
                  style={style.TiName}
                  value={rightAXIS}
                  onChangeText={text => {
                    setRightAXIS(text);
                  }}
                  placeholder="Enter AXIS"
                  placeholderTextColor={'grey'}
                />
              </View>
              <View style={style.passwordContainer}>
                <TextInput
                  keyboardType="numeric"
                  autoFocus={false}
                  style={style.TiName}
                  value={rightVA}
                  onChangeText={text => {
                    setRightVA(text);
                  }}
                  placeholder="Enter VA"
                  placeholderTextColor={'grey'}
                />
              </View>
              <View style={style.HeaderContainer}>
                <Text style={style.titleHeader}>Left Eye</Text>
                <FontAwesome5
                  name="eye"
                  size={18}
                  style={{marginLeft: 10}}
                  color={'black'}
                />
              </View>
              <View style={style.passwordContainer}>
                <TextInput
                  keyboardType="numeric"
                  autoFocus={false}
                  style={style.TiName}
                  value={leftSPH}
                  onChangeText={text => {
                    setLeftSPH(text);
                  }}
                  placeholder="Enter SPH"
                  placeholderTextColor={'grey'}
                />
              </View>
              <View style={style.passwordContainer}>
                <TextInput
                  keyboardType="numeric"
                  autoFocus={false}
                  style={style.TiName}
                  value={leftCYL}
                  onChangeText={text => {
                    setLeftCYL(text);
                  }}
                  placeholder="Enter CYL"
                  placeholderTextColor={'grey'}
                />
              </View>
              <View style={style.passwordContainer}>
                <TextInput
                  keyboardType="numeric"
                  autoFocus={false}
                  style={style.TiName}
                  value={leftAXIS}
                  onChangeText={text => {
                    setLeftAXIS(text);
                  }}
                  placeholder="Enter AXIS"
                  placeholderTextColor={'grey'}
                />
              </View>
              <View style={style.passwordContainer}>
                <TextInput
                  keyboardType="numeric"
                  autoFocus={false}
                  style={style.TiName}
                  value={leftCYL}
                  onChangeText={text => {
                    setLeftVA(text);
                  }}
                  placeholder="Enter VA"
                  placeholderTextColor={'grey'}
                />
              </View>
              <View style={style.HeaderContainer}>
                <Text style={style.titleHeader}>Treatment</Text>
                <Entypo
                  name="text-document-inverted"
                  size={18}
                  style={{marginLeft: 10}}
                  color={'black'}
                />
              </View>
              <View style={style.passwordContainer}>
                <TextInput
                  autoFocus={false}
                  style={style.TiName}
                  value={treatment}
                  onChangeText={text => {
                    setTreatment(text);
                  }}
                  placeholder="Enter Treatment"
                  placeholderTextColor={'grey'}
                />
              </View>
              <View style={style.HeaderContainer}>
                <Text style={style.titleHeader}>Diagnosis</Text>
                <FontAwesome5
                  name="diagnoses"
                  size={18}
                  style={{marginLeft: 10}}
                  color={'black'}
                />
              </View>
              <View style={style.passwordContainer}>
                <TextInput
                  autoFocus={false}
                  style={style.TiName}
                  value={diagnosis}
                  onChangeText={text => {
                    setDiagnosis(text);
                  }}
                  placeholder="Enter Diagnosis"
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
            </ScrollView>
          </ImageBackground>
        </View>
      </Modal>
    </>
  );
};
export default ReportUploadModal;
