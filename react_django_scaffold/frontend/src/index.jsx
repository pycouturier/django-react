import React from 'react';
import ReactDOM from 'react-dom';
import Copyright from './components/Copyright';

const App = () => (
  <>
    Bonjour à tous
    <Copyright />
  </>
);


ReactDOM.render(<App />, document.getElementById('app'));
