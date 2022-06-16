import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {style} from './style';
import {AppHeader} from '../../components/Other/AppBar';
import {colors} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {isIOS} from '../../constants/size';
import {NewsDATA} from './data';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Routes} from '../../../navigation/routes/routes';

const News = () => {
  let navigation = useNavigation();

  return (
    <View style={style.container}>
      {/* <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View> */}
      <SafeAreaView>
        <AppHeader
          containerStyle={style.containerStyle}
          logoIcon={true}
          notificatAndDetailsIcons={true}
          notificationColor={colors.black}
          detailsColor={colors.black}
          detailsIcon={true}
          //@ts-ignore
          onPressDetailsIcon={() =>
            //@ts-ignore
            navigation.openDrawer()
          }
          onPressNotification={() =>
            //@ts-ignore
            navigation.navigate(Routes.NotificationsStack)
          }
          headingText={true}
          headingTitle="Новости"
          headingTextStyle={style.titleStyle}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={NewsDATA}
          numColumns={1}
          contentContainerStyle={{
            paddingBottom: 50,
            paddingTop: 15,
          }}
          // extraData={selectedId}
          // keyExtractor={(item) => item.id}
          renderItem={({item, index}) => {
            // console.log({index});
            return (
              <TouchableOpacity
                onPress={() =>
                  //@ts-ignore
                  navigation.navigate(Routes.NewsRead)
                }>
                <View style={style.newsContainer}>
                  <View style={style.imageContainer}>{item.image}</View>
                  <View style={style.textContainer}>
                    <Text style={style.text}>{item.label}</Text>
                    <View style={style.detailsContainer}>
                      <Text style={style.time}>{item.time}</Text>
                      <TouchableOpacity>
                        <View>{item.iconFavorite}</View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default News;
