import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BabaChartsContainer from './containers/babacharts/babaChartsContainer.jsx';


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={BabaChartsContainer} />
    </div>
  </Router>
);

render(
  <App />,
  document.getElementById('app')
);
