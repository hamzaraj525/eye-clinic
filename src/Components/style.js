import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
  },

  whiteContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
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
  TiName: {fontSize: 12, width: '90%', height: 50, marginLeft: 6},

  loginBtn: {
    width: '80%',
    height: 45,
    borderRadius: 25,
    backgroundColor: 'rgb(72,154,237)',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '6%',
    elevation: 0,
  },

  okBtnTxt: {
    fontSize: 15,
    fontWeight: '800',
    color: 'white',
  },
  imgBtn: {
    backgroundColor: 'rgb(233,236,244)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
    width: '80%',
    height: height / 4,
    marginTop: '10%',
  },
  img: {
    borderRadius: 11,
    width: '100%',
    height: height / 4,
  },
  backImg: {flex: 1},
  titleHeader: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
  HeaderContainer: {
    alignItems: 'center',
    width: '80%',
    flexDirection: 'row',
    marginTop: '3%',
  },
});
