import React from 'react';
import { View, Text, Button } from 'react-native';
import { Link, NavigationContainer } from '@react-navigation/native';
import { navigate } from '../../../RootNavigation';
import styled from 'styled-components/native';

const HomeScreen = () => {
  return (
    <Welcome>
      <Title>화면을 오른쪽으로 밀어보세요!</Title>
      {/* <Button title="Popup Use Modal" onPress={() => navigate('PopupUseModal')} /> */}
    </Welcome>
  );
};

export default HomeScreen;

const Welcome = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 15px;
`;
