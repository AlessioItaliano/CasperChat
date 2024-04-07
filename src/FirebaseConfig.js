// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCUeep9IeOgE3QnLf68wwOdcBmOu_d_4DA',
//   authDomain: 'messenger-app-a1111.firebaseapp.com',
//   projectId: 'messenger-app-a1111',
//   storageBucket: 'messenger-app-a1111.appspot.com',
//   messagingSenderId: '256772824620',
//   appId: '1:256772824620:web:3fcc4b93b444844f69fb89',
//   measurementId: 'G-EBL7EN3GH3',
// };

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
