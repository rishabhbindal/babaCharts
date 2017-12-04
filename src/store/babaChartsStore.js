// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from '../reducers/babaCharts/rootReducer';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from '../sagas/selfTrialExperience/rootSaga';

// let reduxDevTools = f => f;
// if (process.env.NODE_ENV === 'development') {
//   reduxDevTools = typeof window === 'object' &&
//     typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f;
// }

// const sagaMiddleware = createSagaMiddleware();

// const selfTrialExperienceStore = createStore(
//   rootReducer,
//   reduxDevTools,
//   applyMiddleware(sagaMiddleware)
// );
// sagaMiddleware.run(rootSaga);

// export default selfTrialExperienceStore;
