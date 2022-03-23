import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {windowHeight, windowWidth} from '../../constants/size';
import {
  FacebookIcon,
  InstagramIcon,
  Pattern,
  TelegrammIcon,
} from '../../assets/icons/icon';
import {colors} from '../../theme';
import {useNavigation} from '@react-navigation/native';

//@ts-ignore
const CustomDrawer = (props, index) => {
  let navigation = useNavigation();

  return (
    <View style={{flex: 1, width: windowWidth / 1 - 25}}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          // backgroundColor: '#8200d6',
          width: windowWidth / 1 - 25,
          zIndex: 999,
          // paddingBottom: 100,
          // position: 'relative',
        }}>
        <ImageBackground
          source={require('../../assets/images/details_header_bg.png')}
          resizeMode="cover"
          style={{width: windowWidth / 1, height: 200}}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 20,
            }}>
            <View
              style={{
                width: windowWidth / 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity onPress={() => navigation.closeDrawer()}>
                <Text
                  style={{
                    fontSize: 23,
                    fontWeight: '600',
                    lineHeight: 35,
                    letterSpacing: 1,
                    color: colors.white,
                    // width: 220,
                    marginHorizontal: 25,
                  }}>
                  X
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                // width: '100%',
                paddingHorizontal: 25,
              }}>
              <TouchableOpacity>
                <View
                  style={{
                    width: 86,
                    height: 86,
                    backgroundColor: '#991',
                    borderRadius: 50,
                  }}></View>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'space-around',
                }}>
                <Text
                  style={{
                    fontSize: 23,
                    fontWeight: '600',
                    lineHeight: 35,
                    letterSpacing: 1,
                    color: colors.white,
                    // width: 220,
                    paddingHorizontal: 24,
                  }}>
                  Ройтман Рафаэль
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '600',
                      lineHeight: 35,
                      letterSpacing: 1,
                      color: colors.gray,
                      // width: 220,
                      paddingHorizontal: 24,
                    }}>
                    Посмотреть профиль
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: windowWidth / 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  fontSize: 23,
                  fontWeight: '600',
                  lineHeight: 35,
                  letterSpacing: 1,
                  color: colors.white,
                  marginHorizontal: 25,
                }}>
                RU
              </Text>
            </View>
          </View>
        </ImageBackground>

        <View style={{height: windowHeight / 2 + 75}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              // marginBottom: 100,
              paddingVertical: 10,
              paddingHorizontal: 5,
            }}>
            {/* <View
            style={{
              backgroundColor: '#fff',
            }}> */}
            <DrawerItemList {...props} />
            {/* </View> */}
          </ScrollView>
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          paddingHorizontal: 25,
          paddingVertical: 25,
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: windowWidth / 3 + 20,
            paddingBottom: 20,
          }}>
          <TouchableOpacity onPress={() => {}} style={{}}>
            <FacebookIcon size={25} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{}}>
            <TelegrammIcon size={25} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{}}>
            <InstagramIcon size={25} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            marginTop: -40,
            bottom: -60,
            right: -0,
            zIndex: -1,
          }}>
          <Pattern size={200} />
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
