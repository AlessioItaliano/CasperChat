// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectIsLoggedIn } from '../redux/auth/selectors';
import { useContext } from 'react';
import { Context } from 'index';
import { useAuthState } from 'react-firebase-hooks/auth';

// const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   // const isLoggedIn = useSelector(selectIsLoggedIn);
//   const { auth } = useContext(Context);
//   const [user] = useAuthState(auth);

//   return !user ? <Navigate to={redirectTo} /> : <Component />;
// };

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  // return user !== null ? <Navigate to={redirectTo} /> : <Component />;
  return !user ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
