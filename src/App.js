import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import './assets/css/app.scss';

function App() {
  return (
    <div className="app_ container-fluid">
      <BrowserRouter>
        <Routes />
        <ToastContainer autoClose={3000} className="toast-container" />
      </BrowserRouter>
    </div>
  );
}

export default App;
