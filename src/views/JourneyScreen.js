import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const JourneyScreen = () => {
  return (
    <View>
      <PageTitle>JourneyScreen</PageTitle>
    </View>
  );
};

const PageTitle = styled.Text`
  font-size: 48px;
`;

export default JourneyScreen;
