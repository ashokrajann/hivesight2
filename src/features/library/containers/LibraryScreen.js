import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    lessons: state.library,
  };
};

const LibraryScreen = ({navigation, lessons}) => {
  return (
    <View>
      <PageTitle>LibraryScreen</PageTitle>
      <TouchableOpacity onPress={() => navigation.navigate('Lesson')}>
        <Lesson>Go to Lesson</Lesson>
        <Text>{lessons[0].lessonName}</Text>
      </TouchableOpacity>
    </View>
  );
};

const PageTitle = styled.Text`
  font-size: 48px;
`;

const Lesson = styled.Text`
  font-size: 24px;
  color: blue;
  margin-top: 20px;
`;

export default connect(mapStateToProps)(LibraryScreen);
