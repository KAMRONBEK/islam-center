import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  GestureResponderEvent,
  TouchableOpacity,
  Image,
} from 'react-native';

import {colors} from '../../../theme';

export interface ChapterProps {
  chapter?: any;
  chapterTitle?: any;
  allChapter?: any;

  onPress?: () => void;
}

// export interface PressableChapterProps extends React.ComponentProps<any> {
//   onPress: ((event: GestureResponderEvent) => void) | undefined;
// }

// export let PressableChapterProps = ({onPress}: PressableChapterProps) => {
//   return <TouchableOpacity onPress={onPress}></TouchableOpacity>;
// };

export function Chapter({
  chapter,
  chapterTitle,
  allChapter,
  onPress,
}: ChapterProps) {
  let props = {
    chapter,
    chapterTitle,
    allChapter,
    onPress,
  };
  return (
    <View style={style.containerStyle}>
      {chapter && (
        <View style={style.chapter}>
          <Text style={style.title}>{chapterTitle}</Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={style.btnAll}>{allChapter}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export const style = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    marginVertical: 35,
  },

  chapter: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.black,
  },

  btnAll: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.green,
  },
});
