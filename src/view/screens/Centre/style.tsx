import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight, isIOS} from '../../constants/size';
import {colors} from '../../theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
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

  museumBG: {
    height: windowHeight / 4 + 100,
    zIndex: -1,
    // position: 'absolute',
    // marginTop: -60,
    marginBottom: -40,
  },

  titleText: {
    position: 'absolute',
    marginTop: 200,
    marginHorizontal: 20,
    fontSize: 25,
    fontWeight: '700',
    color: colors.white,
  },

  textContainer: {
    height: windowHeight / 4 + 150,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    // position: 'absolute',
    // marginTop: -40,
    marginBottom: -25,
    // paddingVertical: 50,
    paddingHorizontal: 30,
    zIndex: 1,
  },

  labelText: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.gray,
  },
  image: {
    height: windowHeight / 4 + 100,
    zIndex: -1,
    marginBottom: -40,
  },

  imageLast: {
    height: windowHeight / 5,
    zIndex: -1,
    marginBottom: -40,
  },
});
