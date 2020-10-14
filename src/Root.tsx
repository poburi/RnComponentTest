import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { StackParamList } from './@types/Navigation';
import { NavigationRef, navigate } from './RootNavigation';

import HomeScreen from './screens/Public/Home';
import { PopupScreen } from './screens/Public/Popup';

const RootStack = createStackNavigator<StackParamList>();

const Root = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={NavigationRef}>
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="PopupUseModal" component={PopupScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Root;
