import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const AccountScreen = () => {
  return (
    <View>
      <PageTitle>AccountScreen</PageTitle>
    </View>
  );
};

const PageTitle = styled.Text`
  font-size: 48px;
`;

export default AccountScreen;
