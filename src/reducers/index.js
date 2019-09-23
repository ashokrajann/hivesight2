import {combineReducers} from 'redux';
import libraryReducer from '../features/library/reducers';
import journeyReducer from '../features/journey/reducers';

const rootReducer = combineReducers({
  library: libraryReducer,
  journey: journeyReducer,
});

export default rootReducer;
