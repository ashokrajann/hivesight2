import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import LibraryScreen from './src/features/library/containers/LibraryScreen';
import LessonScreen from './src/features/library/containers/LessonScreen';
import JourneyScreen from './src/features/journey/containers/JourneyScreen';
import InsightsProfileScreen from './src/features/journey/containers/InsightsProfileScreen';
import InsightsWallScreen from './src/features/journey/containers/InsightsWallScreen';
import InsightsOverviewScreen from './src/features/journey/containers/InsightsOverviewScreen';
import InsightsArchiveScreen from './src/features/journey/containers/InsightsArchiveScreen';
import AccountScreen from './src/features/account/containers/AccountScreen';
import SignupScreen from './src/features/onboarding/containers/SignupScreen';
import LoginScreen from './src/features/onboarding/containers/LoginScreen';

const LibraryTab = createStackNavigator({
  Library: LibraryScreen,
  Lesson: LessonScreen,
});

LibraryTab.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

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
