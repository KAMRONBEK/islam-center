import React from 'react';
import {Image} from 'react-native';
import { ClockIcon, LikeSave, LocationIcon } from '../../assets/icons/icon';
import { colors } from '../../theme';
import { style } from './style';

export const FavoritesLibraryDATA = [
  {
    id: 1,
    image: (
      <Image
        source={require('../../assets/images/library.png')}
        resizeMode="cover"
        style={style.libraryItemImage}
      />
    ),

    iconLike: <LikeSave size={20} fillColor={colors.green} />,
    label: 'Lorem Ipsum 1',
    title: 'Lorem Ipsum',
    price: '50.000',
    currency: 'сум',
  },

  {
    id: 2,
    image: (
      <Image
        source={require('../../assets/images/library.png')}
        resizeMode="cover"
        style={style.libraryItemImage}
      />
    ),

    iconLike: <LikeSave size={20} fillColor={colors.green} />,
    label: 'Lorem Ipsum 2',
    title: 'Lorem Ipsum',
    price: '50.000',
    currency: 'сум',
  },

  {
    id: 3,
    image: (
      <Image
        source={require('../../assets/images/library.png')}
        resizeMode="cover"
        style={style.libraryItemImage}
      />
    ),

    iconLike: <LikeSave size={20} fillColor={colors.green} />,
    label: 'Lorem Ipsum 3',
    title: 'Lorem Ipsum',
    price: '50.000',
    currency: 'сум',
  },

  {
    id: 4,
    image: (
      <Image
        source={require('../../assets/images/library.png')}
        resizeMode="cover"
        style={style.libraryItemImage}
      />
    ),

    iconLike: <LikeSave size={20} fillColor={colors.green} />,
    label: 'Lorem Ipsum 4',
    title: 'Lorem Ipsum',
    price: '50.000',
    currency: 'сум',
  },

  {
    id: 5,
    image: (
      <Image
        source={require('../../assets/images/library.png')}
        resizeMode="cover"
        style={style.libraryItemImage}
      />
    ),

    iconLike: <LikeSave size={20} fillColor={colors.green} />,
    label: 'Lorem Ipsum 5',
    title: 'Lorem Ipsum',
    price: '50.000',
    currency: 'сум',
  },

  {
    id: 6,
    image: (
      <Image
        source={require('../../assets/images/library.png')}
        resizeMode="cover"
        style={style.libraryItemImage}
      />
    ),

    iconLike: <LikeSave size={20} fillColor={colors.green} />,
    label: 'Lorem Ipsum 6',
    title: 'Lorem Ipsum',
    price: '50.000',
    currency: 'сум',
  },

  
];






export const FavoritesTourDATA = [
    {
      id: 1,
      image: (
        <Image
          source={require('../../assets/images/tourItemImage.png')}
          resizeMode="cover"
          style={style.tourItemImage}
        />
      ),
  
      iconLike: <LikeSave size={20} fillColor={colors.green} />,
      locationIcon: <LocationIcon size={12} fillColor={colors.black}/>,
      dateIcon: <ClockIcon size={12} fillColor={colors.black}/>,
      label: 'Lorem Ipsum 1',
      title: 'Lorem Ipsum',
      date: '9 март - 11 март, 2021',
      price: '50.000',
      currency: 'сум',
    },

    {
      id: 2,
        image: (
          <Image
            source={require('../../assets/images/tourItemImage.png')}
            resizeMode="cover"
            style={style.tourItemImage}
          />
        ),
    
        iconLike: <LikeSave size={20} fillColor={colors.green} />,
        locationIcon: <LocationIcon size={12} fillColor={colors.black}/>,
        dateIcon: <ClockIcon size={12} fillColor={colors.black}/>,
        label: 'Lorem Ipsu 2',
        title: 'Lorem Ipsum',
        date: '9 март - 11 март, 2021',
        price: '50.000',
        currency: 'сум',
      },

      {
        id: 3,
        image: (
          <Image
            source={require('../../assets/images/tourItemImage.png')}
            resizeMode="cover"
            style={style.tourItemImage}
          />
        ),
    
        iconLike: <LikeSave size={20} fillColor={colors.green} />,
        locationIcon: <LocationIcon size={12} fillColor={colors.black}/>,
        dateIcon: <ClockIcon size={12} fillColor={colors.black}/>,
        label: 'Lorem Ipsum 3',
        title: 'Lorem Ipsum',
        date: '9 март - 11 март, 2021',
        price: '50.000',
        currency: 'сум',
      },

      {
        id: 4,
        image: (
          <Image
            source={require('../../assets/images/tourItemImage.png')}
            resizeMode="cover"
            style={style.tourItemImage}
          />
        ),
    
        iconLike: <LikeSave size={20} fillColor={colors.green} />,
        locationIcon: <LocationIcon size={12} fillColor={colors.black}/>,
        dateIcon: <ClockIcon size={12} fillColor={colors.black}/>,
        label: 'Lorem Ipsum 4',
        title: 'Lorem Ipsum',
        date: '9 март - 11 март, 2021',
        price: '50.000',
        currency: 'сум',
      },

      {
        id: 5,
        image: (
          <Image
            source={require('../../assets/images/tourItemImage.png')}
            resizeMode="cover"
            style={style.tourItemImage}
          />
        ),
    
        iconLike: <LikeSave size={20} fillColor={colors.green} />,
        locationIcon: <LocationIcon size={12} fillColor={colors.black}/>,
        dateIcon: <ClockIcon size={12} fillColor={colors.black}/>,
        label: 'Lorem Ipsum 5',
        title: 'Lorem Ipsum',
        date: '9 март - 11 март, 2021',
        price: '50.000',
        currency: 'сум',
      },
  
    
  ];
  
