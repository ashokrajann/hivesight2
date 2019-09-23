import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import styled from 'styled-components/native';

const LessonBar = ({navigation, lessonName}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Lesson')}>
      <Lesson>{lessonName}</Lesson>
    </TouchableOpacity>
  );
};

const Lesson = styled.Text`
  font-size: 24px;
  color: blue;
  margin-top: 20px;
`;

export default withNavigation(LessonBar);
