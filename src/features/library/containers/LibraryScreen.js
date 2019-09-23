import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
// import LessonBar from '../components/LessonBar';
import styled from 'styled-components/native';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    lessons: state.library,
  };
};

const LibraryScreen = ({navigation, lessons}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={lessons}
        renderItem={({item}) => (
          <LessonBar
            key={item.id}
            onPress={() => navigation.navigate('Lesson')}>
            <LessonText>{item.lessonName}</LessonText>
          </LessonBar>
        )}
      />
    </SafeAreaView>
  );
};

const LessonBar = styled.TouchableOpacity`
  height: 72px;
  width: 320px;
  margin-bottom: 16px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #fce4c4;
  padding-left: 16px;
  display: flex;
  justify-content: center;
`;

const LessonText = styled.Text`
  font-size: 18px;
`;

LibraryScreen.navigationOptions = {
  header: null,
};

export default connect(mapStateToProps)(LibraryScreen);
