import React from 'react';
import {Image} from 'react-native';
import {LikeSave} from '../../assets/icons/icon';
import {colors} from '../../theme';
import {style} from './style';

export const LibraryDATA = [
  {
    id: 1,
    image: (
      <Image
        source={require('../../assets/images/library.png')}
        resizeMode="cover"
        style={style.productImage}
      />
    ),

    iconLike: <LikeSave size={18} fillColor={colors.white} color={colors.green}/>,
    label: 'Lorem Ipsum',
    title: 'Lorem Ipsum',
    price: '50.000 сум',
  },

  {
    id: 2,
    image: (
      <Image
        source={require('../../assets/images/library.png')}
        resizeMode="cover"
        style={style.productImage}
      />
    ),

    iconLike: <LikeSave size={18} fillColor={colors.white} color={colors.green}/>,
    label: 'Lorem Ipsum',
    title: 'Lorem Ipsum',
    price: 'Бесплатно',
  },

  {
    id: 3,
    image: (
      <Image
        source={require('../../assets/images/library.png')}
        resizeMode="cover"
        style={style.productImage}
      />
    ),

    iconLike: <LikeSave size={18} fillColor={colors.white} color={colors.green}/>,
    label: 'Lorem Ipsum',
    title: 'Lorem Ipsum',
    price: '50.000 сум',
  },

  {
    id: 4,
    image: (
      <Image
        source={require('../../assets/images/library.png')}
        resizeMode="cover"
        style={style.productImage}
      />
    ),

    iconLike: <LikeSave size={18} fillColor={colors.white} color={colors.green}/>,
    label: 'Lorem Ipsum',
    title: 'Lorem Ipsum',
    price: 'Бесплатно',
  },
];
