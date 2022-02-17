import React from 'react';
import {Appbar} from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  GestureResponderEvent,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  DetailsIcon,
  DetailsNotificationIcon,
  IconProps,
} from '../../assets/icons/icon';
import {colors} from '../../theme';

// AppBarBackTo

export interface AddAppBarBackToProps {
  nextActionStyle?: any;
  nextActionTitle?: any;
  titleStyle?: any;
  hintTitle?: any;
  backActionStyle?: any;
  backActionTitle?: any;
  containerStyle?: any;
  hintText?: string;
  rightIcon?: any;
  Icon?: (props: IconProps) => any;
  IconRight?: (props: IconProps) => any;
  icon?: any;
  iconRight?: any;
  onPressIcon?: () => void;
  onPressIconRight?: () => void;
  onPressBackAction?: () => void;
  onPressSave?: () => void;
  onPress?: () => void;
}

export interface PressableAddAppBarBackToProps
  extends React.ComponentProps<any> {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

export let PressableAddAppBarBackToProps = ({
  onPress,
}: PressableAddAppBarBackToProps) => {
  return <TouchableOpacity onPress={onPress}></TouchableOpacity>;
};

export function AppBarBackTo({
  hintText,
  containerStyle,
  backActionTitle,
  backActionStyle,
  titleStyle,
  nextActionStyle,
  nextActionTitle,
  hintTitle,
  rightIcon,
  Icon,
  IconRight,
  icon,
  iconRight,
  onPressIcon,
  onPressBackAction,
  onPressIconRight,
  onPressSave,
}: AddAppBarBackToProps) {
  let props = {
    titleStyle,
    backActionTitle,
    backActionStyle,
    containerStyle,
    title: hintText,
    nextActionStyle,
    nextActionTitle,
    hintTitle,
    rightIcon,
    Icon,
    IconRight,
    icon,
    iconRight,
    onPressIcon,
    onPressBackAction,
    onPressIconRight,
    onPressSave,
  };
  return (
    <View style={containerStyle}>
      <TouchableOpacity style={backActionStyle} onPress={onPressBackAction}>
        <Text>{backActionTitle}</Text>
        {Icon === undefined ? null : (
          //@ts-ignore
          <Icon size={20} color={icon} fillColor={icon} onPress={onPressIcon} />
        )}
      </TouchableOpacity>

      <Text style={titleStyle} onPress={onPressBackAction}>
        {hintTitle}
      </Text>
      <TouchableOpacity style={nextActionStyle} onPress={onPressSave}>
        <Text>{nextActionTitle}</Text>
        {/* <View>{rightIcon}</View> */}
        {IconRight === undefined ? null : (
          //@ts-ignore
          <Icon
            size={20}
            color={iconRight}
            fillColor={iconRight}
            onPress={onPressIconRight}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

// AppBarSecond

export interface AddAppBarDetailsProps {
  nextActionStyle?: any;
  nextActionTitle?: any;
  titleStyle?: any;
  hintTitle?: any;
  backActionStyle?: any;
  backActionTitle?: any;
  containerStyle?: any;
  hintText?: string;
  Icon?: (props: IconProps) => any;
  IconRight?: (props: IconProps) => any;
  icon?: any;
  iconRight?: any;
  onPressIcon?: () => void;
  onPressIconRight?: () => void;
  onPressBackAction?: () => void;
  onPressDetails?: () => void;
  onPress?: () => void;
}

export interface PressableAddAppBarDetailsProps
  extends React.ComponentProps<any> {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

export let PressableAddAppBarDetailsProps = ({
  onPress,
}: PressableAddAppBarDetailsProps) => {
  return <TouchableOpacity onPress={onPress}></TouchableOpacity>;
};

export function AppBarDetails({
  hintText,
  containerStyle,
  backActionTitle,
  backActionStyle,
  titleStyle,
  nextActionStyle,
  nextActionTitle,
  hintTitle,
  Icon,
  IconRight,
  icon,
  iconRight,
  onPressIcon,
  onPressBackAction,
  onPressIconRight,
  onPressDetails,
}: AddAppBarDetailsProps) {
  let props = {
    titleStyle,
    backActionTitle,
    backActionStyle,
    containerStyle,
    title: hintText,
    nextActionStyle,
    nextActionTitle,
    hintTitle,
    Icon,
    IconRight,
    icon,
    iconRight,
    onPressIcon,
    onPressBackAction,
    onPressIconRight,
    onPressDetails,
  };
  return (
    <View style={containerStyle}>
      <TouchableOpacity style={backActionStyle} onPress={onPressBackAction}>
        <Image
          source={require('../../assets/images/Logo.png')}
          resizeMode="cover"
          style={{width: 55, height: 55}}
        />
      </TouchableOpacity>

      <Text style={titleStyle} onPress={onPressBackAction}>
        {hintTitle}
      </Text>
      <View style={nextActionStyle}>
        <TouchableOpacity onPress={onPressDetails}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F0F0F0',
              borderRadius: 2,
              width: 30,
              height: 30,
            }}>
            <DetailsNotificationIcon size={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressDetails}>
          <DetailsIcon color="#000" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
