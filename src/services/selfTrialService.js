import superagent from 'superagent';

const selfTrialService = {
  postModuleIntent(payload) {
    return superagent.post('/api/v1/selftrial/onboarding')
      .send(payload)
      .set('X-AUTH-TOKEN', window.GlobalSession.token);
  },
  updateSession() {
    return superagent.get('/auth/updatesession')
      .set('X-AUTH-TOKEN', window.GlobalSession.token);
  },
  switchuser() {
    return superagent.get('/index/switchuser/redirect/false/to/staff/id/' + window.GlobalSession.idSubscription)
      .set('X-AUTH-TOKEN', window.GlobalSession.token);
  },
};

export default selfTrialService;
