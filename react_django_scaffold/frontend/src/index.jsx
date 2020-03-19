import React from 'react';
import ReactDOM from 'react-dom';
import Copyright from './components/Copyright';
import Fetcher from './components/Fetcher';

const App = () => (
  <>
    Bonjour à tous
    <Fetcher />
    <Copyright />
  </>
);


ReactDOM.render(<App />, document.getElementById('app'));
