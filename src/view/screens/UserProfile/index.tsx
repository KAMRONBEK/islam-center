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

// @ts-ignore
import userProfile_header_bg from '../../assets/images/userProfile_header_bg.png';
import {PencelIcon, PhoneIcon, ProfileIcon} from '../../assets/icons/icon';
import MaskInput from 'react-native-mask-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../components/Button/button';

const UserProfile = () => {
  let navigation = useNavigation();

  const [editName, setEditName] = useState(false);
  const [editLastName, setEditLastName] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [submitEditPhone, setSubmitEditPhone] = useState(false);

  const [takeCode, setTakeCode] = useState(false);

  const [Name, onChangeName] = React.useState('Рафаэль');
  const [LastName, onChangeLastName] = React.useState('Ройтман');
  const [UserPhone, onChangePhone] = React.useState('+ 998 33 333 33 33');
  const [code, onChangeCode] = React.useState('111');

  const [visibleWarning, setVisibleWarning] = React.useState(false);
  const [visibleSendCode, setVisibleSendCode] = React.useState(false);

  let onSubmitCode = () => {
    if (code.length == 4 && code.toString() == '1117') {
      //@ts-ignore
      navigation.navigate(Routes.BottomNavigator);
      setVisibleWarning(false);
      setVisibleSendCode(false);
    } else {
      setVisibleWarning(true);
      setVisibleSendCode(false);
    }
    // console.warn(code);
  };

  let onPressRequestCode = () => {
    setVisibleSendCode(true);
    setVisibleWarning(false);
  };

  return (
    <KeyboardAvoidingView
      // showsVerticalScrollIndicator={false}
      behavior={isIOS ? 'padding' : 'height'}
      style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 0}}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <View style={style.profileContainer}>
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
                editLastName
                  ? style.inputContainerEditable
                  : style.inputContainer
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
                //@ts-ignore
                onPress={() => (
                  setEditPhone(e => !e), setSubmitEditPhone(e => !e)
                  // setTakeCode(e => !e)
                )}>
                <PencelIcon size={20} fillColor={colors.lingthGray} />
              </TouchableOpacity>
            </View>
          </View>
          {editName || editLastName ? (
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
          {submitEditPhone ? (
            <View style={style.userInformationContainer}>
              <Text style={style.takeCodeText}>
                Чтобы сменить номер телефона вам нужно будет вести код
                отправленный на ваш номер
              </Text>
              <Button
                containerStyle={style.buttonContainer}
                //@ts-ignore
                onPress={() => (
                  setTakeCode(e => !e), setSubmitEditPhone(e => !e)
                )}
                text="Запросить код"
                textStyles={style.buttonText}
              />
            </View>
          ) : null}
          {takeCode ? (
            <View style={style.userInformationContainer}>
              <Text style={style.writeCode}>Введите код</Text>
              <View style={style.inputContainerEditable}>
                <MaskInput
                  mask={[/\d/, /\d/, /\d/, /\d/]}
                  value={code}
                  onChangeText={onChangeCode}
                  editable={editLastName}
                  style={style.userLastName}
                  placeholderTextColor={colors.black}
                  keyboardType="number-pad"
                />
              </View>
              {visibleWarning ? (
                <Text style={style.warning}>Код введен не верно</Text>
              ) : null}
              {visibleSendCode ? (
                <Text style={style.reloadCodeText}>
                  Повторно можно запросить через: 1:30
                </Text>
              ) : null}
              <Button
                containerStyle={style.buttonContainer}
                //@ts-ignore
                onPress={onSubmitCode}
                text="Подтвердить"
                textStyles={style.buttonText}
              />
              <TouchableOpacity onPress={onPressRequestCode}>
                <Text style={style.takeCode}>Запросить код ещё раз</Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <View
            style={{backgroundColor: '#fff', height: isIOS ? 100 : 80}}></View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserProfile;
