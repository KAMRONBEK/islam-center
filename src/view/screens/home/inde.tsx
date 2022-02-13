import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {style} from './style';
import {AppBarDetails} from '../../components/Other/AppBar';
import {colors} from '../../theme';

const Home = () => {
  return (
    <ScrollView style={style.container}>
      <AppBarDetails
        containerStyle={style.containerStyle}
        hintTitle="Главная"
        titleStyle={style.titleStyle}
      />
      <View style={style.dynamicContainer}>
        <View style={style.date}></View>
      </View>
    </ScrollView>
  );
};

export default Home;
