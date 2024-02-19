import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.js';
import { store, persistor } from './store/store.js'; 
import { stripePromise } from './utils/stripe.js';
import './index.scss';

import { registerSW } from 'virtual:pwa-register'



// Register the service worker
const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {}

})






ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe = {stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

