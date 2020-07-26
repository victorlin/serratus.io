import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App';

const root = document.getElementById("root");
const routerApp = (
  <Router>
    <App />
  </Router>
)

if (root.hasChildNodes()) {
  hydrate(routerApp, root);
} else {
  render(routerApp, root);
}
