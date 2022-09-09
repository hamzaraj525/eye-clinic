import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  txt: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mapStyle: {
    alignSelf: 'center',
    height: 200,
    width: Dimensions.get('window').width - 38,
  },
  welcomeTxtBodyLeft: {
    marginLeft: '5%',
    marginTop: Platform.OS === 'ios' ? '14%' : '5%',
    marginRight: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt: {fontSize: 31, color: 'black', fontFamily: 'RobotoSlab-Bold'},
  txtHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtTo: {color: 'black', fontSize: 30, fontFamily: 'RobotoSlab-Bold'},

  locContain: {
    alignSelf: 'center',
    marginTop: '2%',
    width: '89%',
    borderRadius: 12,
    height: 57,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locContainSub: {flexDirection: 'column', marginLeft: 8, width: '80%'},

  nameContain: {marginLeft: 28, marginTop: 20},
  userNameTxt: {
    fontFamily: 'RobotoSlab-Bold',
    color: 'grey',
    fontSize: 21,
    fontWeight: '700',
  },
  helpTxt: {fontFamily: 'RobotoSlab-Bold', color: 'grey', fontSize: 11},

  waveImg: {marginLeft: 7, width: 32, height: 32},

  cardImgContain: {
    flexDirection: 'column',
    width: '50%',
    justifyContent: 'center',
  },
  cardImgContainTxt: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  cardSubTitleTxt: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: -4,
    color: 'white',
  },
  cardSubTitleTwoTxt: {
    marginTop: 2,
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 11,
    color: 'white',
  },
  servicesContain: {marginTop: 5, alignSelf: 'center'},
  card: {
    width: '99%',
    marginTop: 14,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  pic: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardSub: {
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  cardSubContainer: {
    borderRadius: 20,
    width: '60%',
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
    backgroundColor: 'rgb(255,255,255)',
  },
  nameInitials: {
    color: 'white',
    fontWeight: '900',
    fontSize: 17,
  },
  name: {
    color: 'black',
    fontWeight: '700',
    fontSize: 15,
  },
  adres: {
    color: 'grey',
    fontSize: 12,
  },
  welcomeTxtBody: {
    shadowColor: 'black',
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    backgroundColor: 'rgb(254,207,116)',
    padding: 18,
  },
  txtTitle: {fontSize: 26, fontWeight: '700', color: 'black'},
  txtSub: {fontSize: 15, color: 'black'},
  logo: {width: 38, height: 38},
  searchInput: {
    fontSize: 16,
    paddingHorizontal: '5%',
    color: 'black',
    borderRadius: 20,
  },
  picContainer: {
    width: 90,
    height: 90,
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
    justifyContent: 'center',
  },
  uploadBtn: {
    top: -25,
    right: 10,
    backgroundColor: 'rgb(73,122,115)',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    alignSelf: 'flex-end',
  },
});
