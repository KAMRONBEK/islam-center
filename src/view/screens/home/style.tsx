import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight, isIOS} from '../../constants/size';
import {colors} from '../../theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // backgroundColor: '#fff',
    width: windowWidth / 1,
    height: isIOS ? windowHeight / 8 - 25 : windowHeight / 8 - 50,
    paddingHorizontal: 30,
  },

  titleStyle: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },

  dynamicContainer: {
    height: isIOS ? windowHeight / 2 : windowHeight / 2,
    width: windowWidth / 1,
    backgroundColor: '#000',
    marginVertical: 30,
  },

  date: {},
});
