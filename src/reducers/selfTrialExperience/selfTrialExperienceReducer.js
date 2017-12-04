import * as Actions from '../../actions/selfTrialExperienceActions/actions';

const initialState = {
  modulesSelected: {
    calendar: false,
    emr: false,
    patients_experience: false,
    cashless_payment: false,
  },
};

export default function selfTrialExperienceReducer(state = initialState, action) {
  switch (action.type) {
  case Actions.TOGGLE_MODULE_SELECT: {
    const modules = {};
    modules[action.data] = !state.modulesSelected[action.data];
    return Object.assign({}, state,
      { modulesSelected: Object.assign({}, state.modulesSelected, modules) });
  }
  default:
    return state;
  }
}
