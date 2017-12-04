import { call, takeLatest, put, select } from 'redux-saga/effects';
import * as Actions from '../../actions/selfTrialExperienceActions/actions';
import selfTrialService from '../../services/selfTrialService';
import Notifications from 'react-notification-system-redux';
import { track } from '../../utils/mixpanelUtility';

const notificationOpts = {
  message: 'Something broke at our end.',
  dismissible: false,
};

function* postSelfTrialOnboarding() {
  const modulesSelected = (yield select()).selfTrialExperienceReducer.modulesSelected;
  try {
    yield call(selfTrialService.postModuleIntent, modulesSelected);
    yield call(selfTrialService.updateSession);
    yield call(selfTrialService.switchuser);
    const selectedModules = [];
    Object.keys(modulesSelected).forEach((keyName) => {
      if (modulesSelected[keyName]) {
        selectedModules.push(keyName);
      }
    });
    const event = {
      name: 'self trial onboarding finish click',
      moduleSelected: selectedModules,
    };
    track(event);
    window.location.href = '/';
  } catch (e) {
    yield put(Notifications.error(notificationOpts));
  }
}

export default function* selfTrialExperienceSaga() {
  yield [
    takeLatest(Actions.POST_SELF_TRIAL_ONBOARDING, postSelfTrialOnboarding),
  ];
}
