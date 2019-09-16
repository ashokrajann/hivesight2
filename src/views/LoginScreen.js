import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const LoginScreen = () => {
  return (
    <View>
      <PageTitle>LoginScreen</PageTitle>
    </View>
  );
};

const PageTitle = styled.Text`
  font-size: 48px;
`;

export default LoginScreen;
