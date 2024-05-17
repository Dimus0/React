import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './assets/Login/AuthContext';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);