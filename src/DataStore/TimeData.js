import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
const time = [
  {
    key: 201,
    title: '2/06/2022',
  },
  {
    key: 202,
    title: '2/06/2022',
  },
  {
    key: 203,
    title: '2/06/2022',
  },
  {
    key: 204,
    title: '2/06/2022',
  },
  {
    key: 205,
    title: '2/06/2022',
  },
  {
    key: 206,
    title: '2/06/2022',
  },
  {
    key: 207,
    title: '2/06/2022',
  },
];

export const colors = [
  'rgb(227,263,272)',
  'rgb(22,22,22)',
  'rgb(99,61,65)',
  'rgb(77,182,172)',
];
export const cardColors = [
  'rgb(240,98,146)',
  'rgb(186,104,200)',
  'rgb(144,164,174)',
  'rgb(253,183,77)',
  'rgb(299,115,115)',
  'rgb(253,183,77)',
];

export const cardLength = [
  width - 100,
  width - 30,
  width - 100,
  width - 40,
  width - 70,
  width - 30,
];
export default time;
