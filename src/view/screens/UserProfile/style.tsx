import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight, isIOS} from '../../constants/size';
import {colors} from '../../theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    backgroundColor: colors.white,
  },

  headerContainer: {
    // backgroundColor: colors.green,
    height: isIOS ? windowHeight / 4 + 10 : windowHeight / 4 - 10,
  },

  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#9485',
    width: windowWidth / 1,
    height: isIOS ? windowHeight / 8 - 20 : windowHeight / 8 - 20,
    paddingHorizontal: 20,
  },

  titleStyle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },

  serProfileBg: {
    height: windowHeight / 3 - 50,
  },

  profileContainer: {
    flex: 1,
    // marginTop: windowHeight / -2 + 50,
    // borderWidth: 1,
  },

  userContainer: {
    zIndex: 1,
    marginTop: windowHeight / -6 + 10,
    // marginTop: windowHeight / 3 - 50,
    // paddingHorizontal: 20,
    width: windowWidth / 1,
    alignItems: 'center',
  },

  userImage: {
    height: 130,
    width: 130,
  },

  userFullName: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.black,
    marginTop: 25,
  },

  profileContainer: {
    // paddingHorizontal: 20,
    // marginVertical: 20,
    // paddingVertical: 30,
    // marginBottom: 90,
  },

  userInformationContainer: {
    marginBottom: 35,
    marginHorizontal: 20,
    // borderWidth: 1,
  },

  text: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.lingthGray,
    marginBottom: 18,
  },

  inputContainer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.liteGray,
  },

  inputContainerEditable: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.62,

    elevation: 2,
  },

  pencelToggle: {
    // borderWidth: 1,
  },

  userName: {
    fontSize: 18,
    fontWeight: '600',
    width: '80%',
    color: colors.black,
    //   borderWidth: 1,
    marginLeft: 22,
  },

  userLastName: {
    fontSize: 18,
    fontWeight: '600',
    width: '80%',
    color: colors.black,
    marginLeft: 22,
  },

  userPhone: {
    fontSize: 18,
    fontWeight: '600',
    width: '80%',
    color: colors.black,
    marginLeft: 22,
  },
});