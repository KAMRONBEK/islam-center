import React from 'react';
import {ImageProps} from 'react-native';
import {colors} from '../../theme';
import {
  Image,
  StyleSheet,
  TextStyle,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {IconProps} from '../../assets/icons/icon';
import {isIOS, windowWidth} from '../../constants/size';
import {DrawerDATA} from './data';

export interface DrawerItemProps {
  onPress?: () => void;
  text?: string;
  loading?: boolean;
  style?: () => void;
  icon?: any;
  disableIcon?: boolean;
  containerStyle?: ViewStyle;
  textStyles?: TextStyle;
  Icon?: (props: IconProps) => any;
  image?: ImageProps;
}

const DrawerItem = ({onPress}: DrawerItemProps) => {
  return (
    <View style={styles.plane}>
      {/* <TouchableOpacity onPress={onPress}> */}
      {/* <View style={styles.container}> */}
      {DrawerDATA.map((e, i) => {
        return (
          <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
              <View>{e.icon}</View>
              <Text style={styles.text}>{e.title}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
      {/* {Icon === undefined ? null : (
        //@ts-ignore
        <Icon size={30} color={icon} fillColor={icon} />
      )}
      <Text>{text}</Text> */}
      {/* </View> */}
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  plane: {
    width: windowWidth / 2 + 50,
    // borderWidth: 1,
    // borderColor: '#000',
  },
  container: {
    flexDirection: 'row',
    // marginTop: 10,
    paddingVertical: isIOS ? 12 : 10,
  },
  icon: {
    width: 40,
  },
  text: {
    fontSize: 26,
    fontWeight: '600',
    color: colors.gray,
    paddingHorizontal: isIOS ? 30 : 30,
    // width: windowWidth / 2 + 40,
    borderColor: 'rgba(255,255,255,0.13)',
  },
});
