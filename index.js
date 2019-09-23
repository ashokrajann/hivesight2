/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from './configureStore';
import {name as appName} from './app.json';

const store = configureStore();

const AppContainer = () => {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  );
};

console.log(store.getState());

AppRegistry.registerComponent(appName, () => AppContainer);
