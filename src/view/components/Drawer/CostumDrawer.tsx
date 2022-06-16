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
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {
  CoruselArrowLeft,
  DropDownIcon,
  FacebookIcon,
  GlobIcon,
  InstagramIcon,
  Pattern,
  TelegrammIcon,
} from '../../assets/icons/icon';
import {colors} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import {color} from 'react-native-reanimated';

//@ts-ignore
const CustomDrawer = (props, index) => {
  let navigation = useNavigation();

  const countries = [
    {
      title: 'RU',
      image: <GlobIcon size={22} fillColor="black" />,
      // image: require('../../assets/images/logo.png'),
    },
    {
      title: 'UZ',
      image: <GlobIcon size={22} fillColor="black" />,
      // image: require('../../assets/images/logo.png'),
    },
  ];

  return (
    <View style={{flex: 1, width: windowWidth / 1 - 25}}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          // backgroundColor: '#8200d6',
          paddingTop: isIOS ? 42 : 0,
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
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text
                  style={{
                    fontSize: 20,
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
                      fontSize: 16,
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
              {/* <TouchableOpacity
                style={{
                  right: 20,
                  borderWidth: 1,
                  borderRadius: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 15,
                  borderColor: 'white',
                  justifyContent: 'space-between',
                }}>
                <GlobIcon size={18} fillColor="white" />
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '600',
                    lineHeight: 35,
                    letterSpacing: 1,
                    paddingHorizontal: 8,
                    color: colors.white,
                  }}>
                  RU
                </Text>
              </TouchableOpacity> */}
              <SelectDropdown
                data={countries}
                onSelect={(selectedItem, index) => {
                  // console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem.title;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                renderCustomizedButtonChild={(selectedItem, index) => {
                  return (
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        paddingHorizontal: 6,

                        // borderWidth: 1,
                        // borderColor: colors.white,
                      }}>
                      {selectedItem ? (
                        <GlobIcon size={22} fillColor="white" />
                      ) : (
                        <GlobIcon size={22} fillColor="white" />
                      )}
                      <Text
                        style={{
                          color: '#fff',
                          textAlign: 'center',
                          fontSize: 16,
                          marginHorizontal: 6,
                        }}>
                        {selectedItem ? selectedItem.title : 'RU'}
                      </Text>
                    </View>
                  );
                }}
                renderDropdownIcon={isOpened => {
                  return (
                    <DropDownIcon
                      fillColor="#E6E6E6"
                      color="#E6E6E6"
                      size={13}
                      style={{
                        // borderWidth: 1,
                        borderColor: colors.white,
                        marginTop: 5,
                        marginLeft: 6,
                      }}
                    />
                  );
                }}
                dropdownIconPosition={'right'}
                buttonStyle={{
                  width: 100,
                  height: 40,
                  right: 20,
                  borderWidth: 1,
                  borderColor: 'white',
                  borderRadius: 10,

                  backgroundColor: 'transparent',
                }}
                buttonTextStyle={{
                  fontSize: 11,
                  opacity: 0.5,
                  color: colors.black,
                }}
                renderCustomizedRowChild={(item, index) => {
                  return (
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        paddingHorizontal: 15,
                      }}>
                      {/* <Image
                        source={item.image}
                        // style={styles.dropdownRowImage}
                      /> */}
                      {item.image}

                      {/* <GlobIcon size={16} fillColor="black" /> */}
                      <Text
                        style={{
                          color: 'black',
                          textAlign: 'center',
                          fontSize: 16,
                          marginHorizontal: 12,
                        }}>
                        {item.title}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </ImageBackground>

        <View style={{height: windowHeight / 2 + 150}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              // marginBottom: 100,
              paddingHorizontal: 5,
            }}>
            <View style={{marginBottom: 80}}>
              <DrawerItemList {...props} />
            </View>
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
            <FacebookIcon size={21} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{}}>
            <TelegrammIcon size={21} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{}}>
            <InstagramIcon size={21} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            marginTop: -40,
            bottom: -40,
            right: -0,
            zIndex: -1,
          }}>
          <Pattern size={230} />
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
