import { Navigate } from 'react-router-dom';

import { auth } from './FirebaseConfig';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const user = auth.currentUser;

  console.log(user);

  return user === null ? <Component /> : <Navigate to={redirectTo} />;
};

export default RestrictedRoute;
