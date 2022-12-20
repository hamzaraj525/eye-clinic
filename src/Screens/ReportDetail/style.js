import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
import {font} from './../../Constraints/Constraints';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  header: {color: 'black', fontSize: 18, fontFamily: font.FONTTIMES},
  headerTop: {
    color: 'black',
    fontSize: 26,
    fontFamily: font.FONTTIMES,
    marginBottom: 7,
  },
  backImg: {flex: 1},
  answer: {
    fontFamily: font.FONTTIMES,
    color: 'black',
    fontSize: 16,

    marginBottom: 7,
  },
  sunParenttable: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    height: 70,
    marginRight: 1,
  },
  header2: {
    color: 'black',
    fontFamily: font.FONTTIMES,
    alignSelf: 'center',
    marginTop: 1,
    fontSize: 14,
  },
  header3: {
    color: 'black',
    fontFamily: font.FONTTIMES,
    marginBottom: 7,
    alignSelf: 'center',
    marginTop: 1,
    fontSize: 12,
  },
  headerSub: {
    color: 'grey',
    fontSize: 20,
    fontFamily: font.FONTTIMES,
  },
  colorHeader1: {
    width: 50,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  colorHeader2: {
    width: 125,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  colorHeader3: {
    width: 125,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  headerContain: {
    marginTop: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  subParent3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subParent2: {flexDirection: 'column', paddingHorizontal: '5%'},
  subParent: {paddingHorizontal: '5%', width: width},
  container2: {marginTop: 10},
  line: {
    width: '100%',
    height: 4,
    backgroundColor: 'black',
    marginTop: '7%',
    marginBottom: '2%',
  },
  line1: {
    width: '100%',
    height: 5,
    backgroundColor: 'black',
    marginTop: '7%',
    marginBottom: '2%',
  },
});
