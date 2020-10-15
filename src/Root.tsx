import React from 'react';
import { View, Text, Button, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, useIsDrawerOpen } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { StackParamList, DrawerParamList } from './@types/Navigation';
import { NavigationRef, navigate } from './RootNavigation';

import HomeScreen from './screens/Public/Home';
import { PopupScreen } from './screens/Public/Popup';
import FormScreen from './screens/Public/Form';

const Root = () => {
  const RootStack = createStackNavigator<StackParamList>();
  const Drawer = createDrawerNavigator<DrawerParamList>();

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={NavigationRef}>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Form" component={FormScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Root;
