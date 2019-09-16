import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import LibraryScreen from './src/views/LibraryScreen';
import LessonScreen from './src/views/LessonScreen';
import JourneyScreen from './src/views/JourneyScreen';
import InsightsProfileScreen from './src/views/InsightsProfileScreen';
import InsightsWallScreen from './src/views/InsightsWallScreen';
import InsightsOverviewScreen from './src/views/InsightsOverviewScreen';
import InsightsArchiveScreen from './src/views/InsightsArchiveScreen';
import AccountScreen from './src/views/AccountScreen';
import SignupScreen from './src/views/SignupScreen';
import LoginScreen from './src/views/LoginScreen';

const LibraryTab = createStackNavigator({
  Library: LibraryScreen,
  Lesson: LessonScreen,
});

const JourneyTab = createStackNavigator({
  Journey: JourneyScreen,
  InsightsProfile: InsightsProfileScreen,
  InsightsWall: InsightsWallScreen,
  InsightsOverview: InsightsOverviewScreen,
  InsightsArchive: InsightsArchiveScreen,
});

const AccountTab = createStackNavigator({
  Account: AccountScreen,
});

const SwitchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Login: LoginScreen,
  }),
  mainFlow: createBottomTabNavigator({
    LibraryTab,
    JourneyTab,
    AccountTab,
  }),
});

const App = createAppContainer(SwitchNavigator);

export default () => {
  return <App></App>;
};
