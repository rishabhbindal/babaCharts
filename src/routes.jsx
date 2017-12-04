import React from 'react';
import { Route } from 'react-router-dom';
import ActivityFeedContainer from './components/containers/activityFeed/activityFeedContainer.jsx';

const routes = (
  <Route exact path="/activityfeed" component={ActivityFeedContainer} />
);

export default routes;
