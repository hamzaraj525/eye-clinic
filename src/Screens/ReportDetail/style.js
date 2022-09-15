import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(230, 225, 250)',
  },
  header: {color: 'black', fontSize: 18, fontWeight: '800'},
  headerTop: {
    color: 'black',
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 7,
  },
  answer: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 7,
  },
  sunParenttable: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    height: 70,
    marginRight: 1,
  },
  header2: {
    color: 'black',
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: 1,
    fontSize: 14,
  },
  header3: {
    color: 'black',
    fontWeight: '700',
    marginBottom: 7,
    alignSelf: 'center',
    marginTop: 1,
    fontSize: 12,
  },
  headerSub: {
    color: 'grey',
    fontSize: 20,
    fontWeight: '800',
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
  subParent: {paddingHorizontal: '5%'},
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
