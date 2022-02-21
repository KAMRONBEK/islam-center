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
  Saveg,
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
  detailsIcon?:any
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
  onPressDetails,detailsIcon
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
    detailsIcon
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
            <NotificationIcon size={20} />
          </View>
        </TouchableOpacity>
       {detailsIcon &&
          <TouchableOpacity onPress={onPressDetails}>
          <DetailsIcon color="#000" size={20} />
        </TouchableOpacity>
       }
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({});



export interface AppHeaderProps {
  containerStyle?: any;
  leftArrowIcon?: any;
  colorLeftArrow?: any;
  logoIcon?: any;
  headingText?: any;
  headingTextStyle?: any;
  headingTitle?: any;
  notificatAndDetailsIcons?: any;
  notificationIcon?: any;
  notificationColor?: any;
  detailsIcon?: any;
  detailsColor?: any;
  saveIcon?:any;
  saveColor?: any;
  onPress?: () => void;
  onPressLeftArrow?:() => void;
  onPressNotification?: () => void;
  onPressDetailsIcon?: () => void;
  onPressSaveIcon: () => void;
}

export interface PressableAppHeaderProps
  extends React.ComponentProps<any> {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

export let PressableAppHeaderProps = ({
  onPress,
}: PressableAddAppBarDetailsProps) => {
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

        {leftArrowIcon && 
          <TouchableOpacity onPress={onPressLeftArrow}>
              <ArrowLeft size={20} color={colorLeftArrow}/>
          </TouchableOpacity>
        } 

        {logoIcon && 
            <View>
                <Image
                  source={require('../../assets/images/Logo.png')}
                  resizeMode="cover"
                  style={{width: 55, height: 55}}
                />
            </View>
        }

        {headingText &&
          <Text style={headingTextStyle}>
              {headingTitle}
          </Text>
        }

        {notificationIcon && 
              <TouchableOpacity onPress={onPressNotification} style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F0F0F0',
                borderRadius: 2,
                width: 30,
                height: 30,
              }}>
                  <NotificationIcon size={20} color={notificationColor}/>
              </TouchableOpacity>
        }

        {notificatAndDetailsIcons && 
          <View style={{flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 75, marginLeft: -20,}}>
            {/* {notificationIcon &&  */}
              <TouchableOpacity onPress={onPressNotification} style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F0F0F0',
                borderRadius: 2,
                width: 30,
                height: 30,
              }}>
                  <NotificationIcon size={20} color={colors.black}/>
              </TouchableOpacity>
            {/* } */}

                <TouchableOpacity onPress={onPressDetailsIcon}>
                  <DetailsIcon size={20} color={colors.black}/>
                </TouchableOpacity>
          
          </View>
        }
        
        {saveIcon && 
            <TouchableOpacity onPress={onPressSaveIcon}>
              <Saveg size={20} color={saveColor}/>
            </TouchableOpacity>
        }

    </View>
  );
}
