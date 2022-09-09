import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000aa',
  },
  containerr: {
    borderRadius: 33,
  },
  whiteContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
  },
  passwordContainer: {
    marginTop: '4%',
    flexDirection: 'row',
    backgroundColor: '#F6F3F5',
    borderRadius: 25,
    padding: 12,
    width: '80%',
    height: 45,
    alignItems: 'center',
    alignSelf: 'center',
  },
  TiName: {
    width: '90%',
    height: 50,
    marginLeft: 6,
  },
  loginBtn: {
    width: width / 2,
    height: 40,
    borderRadius: 25,
    backgroundColor: 'red',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '6%',
  },

  okBtnTxt: {
    fontSize: 15,
    fontWeight: '800',
    color: 'white',
  },
  imgBtn: {
    backgroundColor: '#EDF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 110 / 2,
    width: 110,
    height: 110,
    marginTop: '-15%',
  },
});
