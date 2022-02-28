import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  GestureResponderEvent,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  ArrowLeft,
  DetailsIcon,
  NotificationIcon,
  IconProps,
  FavoriteIcon,
} from '../../assets/icons/icon';
import {colors} from '../../theme';

export interface AppHeaderProps {
  containerStyle?: any;
  leftArrowIcon?: any;
  colorLeftArrow?: any;
  logoIcon?: any;
  headingText?: any;
  headingTextStyle?: any;
  headingTitle?: any;
  titleText?: any;
  titleTextStyle?: any;
  titleTitle?: any;
  labelText?: any;
  labelTextStyle?: any;
  labelTitle?: any;
  notificatAndDetailsIcons?: any;
  notificationIcon?: any;
  notificationColor?: any;
  detailsIcon?: any;
  detailsColor?: any;
  saveIcon?: any;
  saveColor?: any;
  onPress?: () => void;
  onPressLeftArrow?: () => void;
  onPressNotification?: () => void;
  onPressDetailsIcon?: () => void;
  onPressSaveIcon?: () => void;
}

export interface PressableAppHeaderProps extends React.ComponentProps<any> {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

export let PressableAppHeaderProps = ({onPress}: PressableAppHeaderProps) => {
  return <TouchableOpacity onPress={onPress}></TouchableOpacity>;
};

export function AppHeader({
  containerStyle,
  leftArrowIcon,
  colorLeftArrow,
  logoIcon,
  headingText,
  headingTextStyle,
  headingTitle,
  titleText,
  titleTextStyle,
  labelText,
  labelTextStyle,
  titleTitle,
  labelTitle,
  notificatAndDetailsIcons,
  notificationIcon,
  notificationColor,
  detailsIcon,
  detailsColor,
  saveIcon,
  saveColor,
  onPressLeftArrow,
  onPressNotification,
  onPressDetailsIcon,
  onPressSaveIcon,
}: AppHeaderProps) {
  let props = {
    containerStyle,
    leftArrowIcon,
    colorLeftArrow,
    logoIcon,
    headingText,
    headingTextStyle,
    headingTitle,
    titleText,
    titleTextStyle,
    titleTitle,
    labelText,
    labelTextStyle,
    labelTitle,
    notificatAndDetailsIcons,
    notificationIcon,
    notificationColor,
    detailsIcon,
    detailsColor,
    saveIcon,
    saveColor,
    onPressLeftArrow,
    onPressNotification,
    onPressDetailsIcon,
    onPressSaveIcon,
  };
  return (
    <View style={containerStyle}>
      {leftArrowIcon && (
        <TouchableOpacity onPress={onPressLeftArrow}>
          <ArrowLeft size={20} color={colorLeftArrow} />
        </TouchableOpacity>
      )}

      {logoIcon && (
        <View>
          <Image
            source={require('../../assets/images/Logo.png')}
            resizeMode="cover"
            style={{width: 55, height: 55}}
          />
        </View>
      )}

      {headingText && <Text style={headingTextStyle}>{headingTitle}</Text>}

      {titleText && (
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 50,
          }}>
          <Text style={titleTextStyle}>{titleTitle}</Text>
          {labelText && <Text style={labelTextStyle}>{labelTitle}</Text>}
        </View>
      )}

      {notificationIcon && (
        <TouchableOpacity
          onPress={onPressNotification}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F0F0F0',
            borderRadius: 2,
            width: 30,
            height: 30,
          }}>
          <NotificationIcon size={20} fillColor={notificationColor} />
        </TouchableOpacity>
      )}

      {notificatAndDetailsIcons && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: 75,
            marginLeft: -20,
          }}>
          {/* {notificationIcon &&  */}
          <TouchableOpacity
            onPress={onPressNotification}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: '#F0F0F0',
              // borderRadius: 2,
              // width: 30,
              // height: 30,
            }}>
            <NotificationIcon size={20} fillColor={notificationColor} />
          </TouchableOpacity>
          {/* } */}

          <TouchableOpacity onPress={onPressDetailsIcon}>
            <DetailsIcon size={20} color={detailsColor} />
          </TouchableOpacity>
        </View>
      )}

      {saveIcon && (
        <TouchableOpacity onPress={onPressSaveIcon}>
          <FavoriteIcon size={20} fillColor={saveColor} />
        </TouchableOpacity>
      )}
    </View>
  );
}
