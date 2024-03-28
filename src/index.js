import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import App from './App';
import './index.css';

initializeApp({
  apiKey: 'AIzaSyCUeep9IeOgE3QnLf68wwOdcBmOu_d_4DA',
  authDomain: 'messenger-app-a1111.firebaseapp.com',
  projectId: 'messenger-app-a1111',
  storageBucket: 'messenger-app-a1111.appspot.com',
  messagingSenderId: '256772824620',
  appId: '1:256772824620:web:3fcc4b93b444844f69fb89',
  measurementId: 'G-EBL7EN3GH3',
});

export const Context = createContext(null);

const auth = getAuth();
const firestore = getFirestore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context.Provider value={{ firestore, auth }}>
      <BrowserRouter basename="/messenger-app">
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
);
