import * as actions from './actions';

export function postSelfTrialOnboarding(data) {
  return { type: actions.POST_SELF_TRIAL_ONBOARDING, data };
}

export function toggleModuleSelect(data) {
  return { type: actions.TOGGLE_MODULE_SELECT, data };
}
