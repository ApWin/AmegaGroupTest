import {StyleSheet} from 'react-native';
import colors from 'assets/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  flatList: {
    paddingTop: 20,
  },
  row: {
    marginHorizontal: 20,
    marginBottom: 4,
  },
  textStyle: {
    color: 'black',
  },
});
