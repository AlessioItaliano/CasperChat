// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectIsLoggedIn } from '../redux/auth/selectors';
// import { useContext } from 'react';
// import { Context } from 'index';
// import { useAuthState } from 'react-firebase-hooks/auth';

// const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   // const isLoggedIn = useSelector(selectIsLoggedIn);
//   const { auth } = useContext(Context);
//   const [user] = useAuthState(auth);

//   return !user ? <Navigate to={redirectTo} /> : <Component />;
// };
import { auth } from './FirebaseConfig';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // const { auth } = useContext(Context);
  // const [user] = useAuthState(auth);
  const user = auth.currentUser;

  console.log(user);

  return user === null ? <Component /> : <Navigate to={redirectTo} />;
  // return !user ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
