import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { Navigate } from 'react-router-dom';
import Loader from 'components/Loader';

import { auth } from './FirebaseConfig';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, []);

  return loading ? (
    <Loader />
  ) : user === null ? (
    <Component />
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default RestrictedRoute;
