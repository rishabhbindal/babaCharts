import { combineReducers } from 'redux';
import selfTrialExperienceReducer from './selfTrialExperienceReducer';
import { reducer as notifications } from 'react-notification-system-redux';

const rootReducer = combineReducers({
  selfTrialExperienceReducer,
  notifications,
});

export default rootReducer;

