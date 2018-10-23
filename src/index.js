import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes/index';

import './styles/init.scss';

const App = () => (
  <Router>
    <Routes />
  </Router>
);


ReactDOM.render(<App />, document.getElementById('app'));
