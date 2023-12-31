import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './normalize.css';
import './index.css';

import store from './store/store';

import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
