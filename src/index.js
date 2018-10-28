import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes/index';
import { Store } from './store';

import './styles/init.scss';

const App = () => (
  <Provider store={ Store }>
    <Router>
      <Routes />
    </Router>
  </Provider>
);


ReactDOM.render(<App />, document.getElementById('app'));
