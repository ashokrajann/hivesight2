import React from 'react';
import {View, Text, Button} from 'react-native';
import styled from 'styled-components/native';

const SignupScreen = ({navigation}) => {
  return (
    <View>
      <PageTitle>SignupScreen</PageTitle>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button
        title="Go to main Flow"
        onPress={() => navigation.navigate('Journey')}
      />
    </View>
  );
};

const PageTitle = styled.Text`
  font-size: 48px;
`;

export default SignupScreen;
