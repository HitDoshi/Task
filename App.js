import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Navigation from './src/navigation/navigation';
import { PaperProvider } from 'react-native-paper';
import { NativeBaseProvider} from "native-base";

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
