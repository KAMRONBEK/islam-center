import React from 'react';
import {
  DetailsHomeIcon,
  DetailsLikeIcon,
  NotificationIcon,
  DetailsBooksIcon,
  DetailsTursIcon,
  DetailsBlogsIcon,
  DetailsForumIcon,
  DetailsSignOutIcon,
  Facebook,
  Telegramm,
  Instagram,
} from '../../assets/icons/icon';
export const DrawerDATA = [
  {
    icon: <DetailsHomeIcon size={30} fillColor="#000" />,
    title: 'Главная',
  },
  {
    icon: <NotificationIcon size={30} />,
    title: 'Уведомления',
  },
  {
    icon: <DetailsLikeIcon size={30} />,
    title: 'Избранное',
  },
  {
    icon: <DetailsBooksIcon size={30} />,
    title: 'Библиотека',
  },
  {
    icon: <DetailsTursIcon size={30} />,
    title: 'Туры',
  },
  {
    icon: <DetailsBlogsIcon size={30} />,
    title: 'Блог',
  },
  {
    icon: <DetailsForumIcon size={30} />,
    title: 'Форум',
  },
  {
    icon: <DetailsSignOutIcon size={30} />,
    title: 'Выход',
  },
];

export const SocialDATA = [
  {
    icon: <Facebook size={30} />,
  },

  {
    icon: <Telegramm size={30} />,
  },

  {
    icon: <Instagram size={30} />,
  },
];
