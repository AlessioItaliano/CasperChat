import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCUeep9IeOgE3QnLf68wwOdcBmOu_d_4DA',
  authDomain: 'messenger-app-a1111.firebaseapp.com',
  projectId: 'messenger-app-a1111',
  storageBucket: 'messenger-app-a1111.appspot.com',
  messagingSenderId: '256772824620',
  appId: '1:256772824620:web:3fcc4b93b444844f69fb89',
  measurementId: 'G-EBL7EN3GH3',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
