import { Navigate } from 'react-router-dom';

import { auth } from './FirebaseConfig';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const user = auth.currentUser;

  return user !== null ? <Component /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
