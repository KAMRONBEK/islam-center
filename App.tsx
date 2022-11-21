import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import Home from './src/view/screens/home/index';
import Details from './src/view/screens/Details';
import {LogBox} from 'react-native';
import {AuthContext} from './src/context/auth/AuthContext';
import {NavigationContainer} from '@react-navigation/native';
import {LangContext} from './src/context/lang/LangContext';
import {AllApiContext} from './src/context/allapi/AllApiContext';
import {NetworkProvider} from 'react-native-offline';
import NoInfo from './src/view/screens/NoInfo';
import { ProfilContext } from './src/context/profil/ProfilContext';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
const App = () => {
  return (
    <NetworkProvider>
      <NavigationContainer>
        {/* Auth */}
        <AuthContext>
          {/* ProfilUser */}
          <ProfilContext>
            {/*Switch Language */}
            <LangContext>
              {/* All Api */}
              <AllApiContext>
                <NoInfo />
                <AppNavigator />
              </AllApiContext>
            </LangContext>
          </ProfilContext>
        </AuthContext>
      </NavigationContainer>
    </NetworkProvider>
  );
};

export default App;
