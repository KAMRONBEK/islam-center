import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight, isIOS} from '../../constants/size';

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#000',
    width: windowWidth / 1,
    height: isIOS ? windowHeight / 8 - 25 : windowHeight / 8 - 50,
    paddingHorizontal: 30,
  },

  body: {},
});
