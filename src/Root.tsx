import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

const Root = () => {
  return (
    <>
      <View>
        <Text>안늉</Text>
      </View>
    </>
  );
};

export default Root;

const ModalButton = styled(Text)``;
