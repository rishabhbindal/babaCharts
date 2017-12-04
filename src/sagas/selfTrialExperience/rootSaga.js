import selfTrialExperienceSaga from './selfTrialExperienceSaga';

function* rootSaga() {
  yield [
    selfTrialExperienceSaga(),
  ];
}

export default rootSaga;
