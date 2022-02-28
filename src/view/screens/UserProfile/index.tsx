import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';
import {AppHeader} from '../../components/Other/AppBar';
import {colors} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {isIOS} from '../../constants/size';

import userProfile_header_bg from '../../assets/images/userProfile_header_bg.png';
import {
  Pencel,
  PencelIcon,
  PhoneIcon,
  ProfileIcon,
} from '../../assets/icons/icon';
import MaskInput from 'react-native-mask-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../components/Button/button';

const UserProfile = () => {
  let navigation = useNavigation();

  const [editName, setEditName] = useState(false);
  const [editLastName, setEditLastName] = useState(false);
  const [editPhone, setEditPhone] = useState(false);

  const [Name, onChangeName] = React.useState('Рафаэль');
  const [LastName, onChangeLastName] = React.useState('Ройтман');
  const [UserPhone, onChangePhone] = React.useState('+ 998 33 333 33 33');

  

  return (
    <KeyboardAvoidingView
      // showsVerticalScrollIndicator={false}
      behavior={isIOS ? 'padding' : 'height'}
      style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 0}}></View>
      <ImageBackground
        source={userProfile_header_bg}
        resizeMode="cover"
        style={style.serProfileBg}>
        <AppHeader
          containerStyle={style.containerStyle}
          logoIcon={true}
          notificatAndDetailsIcons={true}
          notificationColor={colors.white}
          detailsIcon={true}
          detailsColor={colors.white}
          //@ts-ignore
          // onPressDetailsIcon={() => navigation.navigate('Details')}
          headingText={true}
          headingTitle="Профиль"
          headingTextStyle={style.titleStyle}
        />
      </ImageBackground>

      <View style={style.userContainer}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/userImage.png')}
            resizeMode="cover"
            style={style.userImage}
          />
        </TouchableOpacity>
        <Text style={style.userFullName}>Ройтман Рафаэль</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={style.profileContainer}>
        <View style={style.userInformationContainer}>
          <Text style={style.text}>Имя</Text>
          <View
            style={
              editName ? style.inputContainerEditable : style.inputContainer
            }>
            <ProfileIcon size={20} fillColor={colors.lingthGray} />
            <TextInput
              style={style.userName}
              onChangeText={onChangeName}
              value={Name}
              editable={editName}
              // placeholder="Рафаэль"
              placeholderTextColor={colors.black}
              keyboardType="default"
            />
            <TouchableOpacity
              style={style.pencelToggle}
              onPress={() => setEditName(e => !e)}>
              <PencelIcon size={20} fillColor={colors.lingthGray} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.userInformationContainer}>
          <Text style={style.text}>Фамилия</Text>
          <View
            style={
              editLastName ? style.inputContainerEditable : style.inputContainer
            }>
            <ProfileIcon size={20} fillColor={colors.lingthGray} />
            <TextInput
              style={style.userLastName}
              onChangeText={onChangeLastName}
              value={LastName}
              // inlineImageRight={SearchIcon}
              editable={editLastName}
              // placeholder="Ройтман"
              placeholderTextColor={colors.black}
              keyboardType="default"
            />
            <TouchableOpacity
              style={style.pencelToggle}
              onPress={() => setEditLastName(e => !e)}>
              <PencelIcon size={20} fillColor={colors.lingthGray} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.userInformationContainer}>
          <Text style={style.text}>Телефон</Text>
          <View
            style={
              editPhone ? style.inputContainerEditable : style.inputContainer
            }>
            <PhoneIcon size={20} fillColor={colors.lingthGray} />
            <MaskInput
              mask={[
                '+',
                ' ',
                /\d/,
                /\d/,
                /\d/,
                ' ',
                /\d/,
                /\d/,
                ' ',
                /\d/,
                /\d/,
                /\d/,
                ' ',
                /\d/,
                /\d/,
                ' ',
                /\d/,
                /\d/,
              ]}
              editable={editPhone}
              value={UserPhone}
              onChangeText={onChangePhone}
              keyboardType="phone-pad"
              placeholderTextColor="#000"
              style={style.userPhone}
            />
            <TouchableOpacity
              style={style.pencelToggle}
              onPress={() => setEditPhone(e => !e)}>
              <PencelIcon size={20} fillColor={colors.lingthGray} />
            </TouchableOpacity>
          </View>
        </View>
        {editName || editLastName || editPhone ? (
          <Button
            containerStyle={{
              marginHorizontal: 20,
              marginVertical: 20,
              height: 65,
              backgroundColor: colors.green,
            }}
            //@ts-ignore
            // onPress={() => navigation.navigate('BottomNavigator')}
            text="Сохранить"
            textStyles={{
              color: colors.white,
              marginRight: 17,
              fontSize: 20,
              alignItems: 'center',
              fontWeight: isIOS ? '700' : '700',
              fontFamily: 'OpenSans-Regular',
            }}
          />
        ) : null}
        <View
          style={{backgroundColor: '#fff', height: isIOS ? 100 : 80}}></View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserProfile;
