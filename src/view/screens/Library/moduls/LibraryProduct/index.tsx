import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';
import {AppHeader} from '../../../../components/Other/AppBar';
import {isIOS, windowHeight} from '../../../../constants/size';
import {colors} from '../../../../theme';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../../../navigation/routes/routes';
import Button from '../../../../components/Button/button';

const LibraryProduct = () => {
  let navigation = useNavigation();

  const [save, setSave] = useState(false);

  return (
    <View style={style.container}>
      {/* <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View> */}
      <SafeAreaView>
        <AppHeader
          containerStyle={style.containerStyle}
          leftArrowIcon={true}
          colorLeftArrow={colors.white}
          //@ts-ignore
          onPressLeftArrow={() => navigation.navigate(Routes.Library)}
          headingTextStyle={style.titleStyle}
        />
        <View style={style.headerContainer}>
          <View style={style.bookContainer}>
            <View style={style.book}>
              <Text style={style.bookTitle}>AL-QURAN</Text>
              <Text style={style.bookName}>QURAN MAJEED</Text>
            </View>
            <View style={style.bookImage}>
              <Image
                source={require('../../../../assets/images/islamBook.png')}
                resizeMode="cover"
                style={style.image}
              />
            </View>
          </View>
        </View>
        <View style={style.textContainer}>
          <Text style={style.priceText}>Цена:</Text>
          <View style={style.priceContainer}>
            <Text style={style.price}>Бесплатно</Text>
          </View>
          <Text style={style.bookDescriptionName}>Lorem Ipsum</Text>
        </View>
        <View style={{height: windowHeight / 2}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 60}}
            style={style.scrollContainer}>
            <View style={style.bookDiscription}>
              <Text style={style.discription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>

            <View style={style.btnContainer}>
              <Button
                containerStyle={{
                  marginHorizontal: 20,
                  marginTop: 20,
                  height: 65,
                  backgroundColor: colors.green,
                }}
                //@ts-ignore
                onPress={() => navigation.navigate(Routes.LibraryProductRead)}
                text="Читать"
                textStyles={{
                  color: colors.white,
                  marginRight: 17,
                  fontSize: 18,
                  alignItems: 'center',
                  fontWeight: isIOS ? '700' : '700',
                  fontFamily: 'OpenSans-Regular',
                }}
              />
              <Button
                containerStyle={{
                  marginHorizontal: 20,
                  marginVertical: 20,
                  height: 65,
                  backgroundColor: colors.white,
                  borderWidth: 2,
                  borderColor: colors.green,
                }}
                //@ts-ignore
                onPress={() => setSave(e => !e)}
                text={save ? 'Удалить из избранного' : 'В избранное'}
                textStyles={{
                  color: colors.green,
                  marginRight: 17,
                  fontSize: 18,
                  alignItems: 'center',
                  fontWeight: isIOS ? '700' : '700',
                  fontFamily: 'OpenSans-Regular',
                }}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LibraryProduct;

const styles = StyleSheet.create({});
