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

//@ts-ignore
const CustomDrawer = (props, index) => {
  return (
    <View style={{flex: 1, width: windowWidth / 1 - 25}}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          // backgroundColor: '#8200d6',
          width: windowWidth / 1 - 25,
          // paddingBottom: 100,
          // position: 'relative',
        }}>
        <ImageBackground
          source={require('../../assets/images/details_header_bg.png')}
          resizeMode="cover"
          style={{width: windowWidth / 1, height: 200}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              //   fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            John Doe
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#fff',
                // fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}>
              280 Coins
            </Text>
            {/* <FontAwesome5 name="coins" size={14} color="#fff" /> */}
          </View>
        </ImageBackground>

        <View style={{height: windowHeight / 2 + 60}}>
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
        <TouchableOpacity onPress={() => {}} style={{}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
