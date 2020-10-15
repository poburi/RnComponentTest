import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { navigate } from '../../../RootNavigation';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FormScreen = ({ navigation }) => {
  return (
    <View>
      <AntDesign name="user" size={25} color="#666" />
      <Text>아이콘 테스트</Text>
    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
