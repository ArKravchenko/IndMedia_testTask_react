import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './scss/main.scss';


window.onload = function () {
  if (document.querySelector('#root')) {
    ReactDOM.render(<App />, document.querySelector('#root'));
  }
};
