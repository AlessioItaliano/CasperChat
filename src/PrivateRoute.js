// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectors';
import { useContext } from 'react';
import { Context } from 'index';
import { useAuthState } from 'react-firebase-hooks/auth';

// const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { auth } = useContext(Context);
//   const [user] = useAuthState(auth);

//   // const isLoggedIn = useSelector(selectIsLoggedIn);
//   // const isRefreshing = useSelector(selectIsRefreshing);
//   // const shouldRedirect = !isLoggedIn && !isRefreshing;

//   return user ? <Navigate to={redirectTo} /> : <Component />;
// };

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  // return user === null ? <Navigate to={redirectTo} /> : <Component />;

  return user ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
