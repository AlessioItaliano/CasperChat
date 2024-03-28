import { lazy } from 'react';
// import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

// import { refresh } from "../redux/auth/operations";
// import { selectIsRefreshing } from "../redux/auth/selectors";

import Layout from 'components/Layout';
// import Loader from 'components/Loader';

// const ShopPage = lazy(() => import("pages/Shop"));
// const ShoppingCartPage = lazy(() => import("pages/ShoppingCart"));
const LoginPage = lazy(() => import('./components/Login'));
// const RegisterPage = lazy(() => import("pages/Register"));
const ChatPage = lazy(() => import('./components/Chat'));
// const CouponsPage = lazy(() => import("pages/Coupons"));

const App = () => {
  // const dispatch = useDispatch();

  // const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refresh());
  // }, [dispatch]);

  return (
    // isRefreshing ? (
    //   <Loader />
    // ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route
          path="login"
          element={<RestrictedRoute redirectTo="/" component={LoginPage} />}
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
