import React from 'react';
import { View, Text, Button } from 'react-native';
import { Link, NavigationContainer } from '@react-navigation/native';
import { navigate } from '../../../RootNavigation';

const HomeScreen = () => {
  return (
    <View>
      <Button title="Popup Use Modal" onPress={() => navigate('PopupUseModal')} />
    </View>
  );
};

export default HomeScreen;
