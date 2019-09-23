import {createStore} from 'redux';
// import rootReducer from './src/features/library/reducers';
import rootReducer from './src/reducers/index';

export const configureStore = () => {
  const store = createStore(rootReducer);

  return store;
};
