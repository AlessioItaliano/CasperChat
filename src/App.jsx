import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

import Layout from 'components/Layout';
// import Loader from 'components/Loader';

const MainPage = lazy(() => import('components/Main'));
const LoginPage = lazy(() => import('components/Login'));
const ChatPage = lazy(() => import('components/Chat'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route
          path="login"
          element={<RestrictedRoute redirectTo="chat" component={LoginPage} />}
        />
        <Route
          path="chat"
          element={<PrivateRoute redirectTo="/" component={ChatPage} />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;