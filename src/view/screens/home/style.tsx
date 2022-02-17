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
    alignItems: 'center',
    // backgroundColor: '#9485',
    width: windowWidth / 1,
    height: isIOS ? windowHeight / 8 - 20 : windowHeight / 8 - 30,
    paddingHorizontal: 20,
  },

  titleStyle: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },

  bookShopCorusel: {
    width: '100%',
    height: windowHeight / 3 - 10,
    paddingHorizontal: 20,
    marginTop: 30,
    // flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.19,
    elevation: 2,
  },

  childSlide: {
    width: windowWidth / 1 - 40,
    justifyContent: 'center',
    borderRadius: 5,
  },

  textSlide: {
    fontSize: 22,
    textAlign: 'center',
  },

  bookShopCoruselBtn: {
    height: 40,
    width: windowWidth / 1,
    marginVertical: 120,
    paddingHorizontal: 8,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  left: {
    width: 30,
    height: 30,
    borderRadius: 50,
    // position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  right: {
    width: 30,
    height: 30,
    borderRadius: 50,
    // position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth / 1,
  },

  card: {
    height: windowHeight / 2,
    width: windowWidth / 2 + 150,
    borderRadius: 5,
    marginVertical: 20,
  },

  newsContainer: {
    height: 50,
    width: windowWidth / 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -25,
    marginBottom: 35,
  },

  newsText: {
    fontSize: 35,
    fontWeight: '700',
  },

  newsCorusel: {
    width: '100%',
    height: windowHeight / 2 - 10,
    paddingHorizontal: 20,
    marginBottom: 50,
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.19,
    elevation: 2,
  },

  newsCoruselBtn: {
    height: 40,
    width: windowWidth / 1,
    marginVertical: 185,
    paddingHorizontal: 8,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
