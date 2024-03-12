// import { lazy, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Routes, Route, Navigate } from "react-router-dom";

// import PrivateRoute from "./PrivateRoute";
// import RestrictedRoute from "./RestrictedRoute";

// import { refresh } from "../redux/auth/operations";
// import { selectIsRefreshing } from "../redux/auth/selectors";

// import Layout from "components/Layout";
// import Loader from "components/Loader";

// const ShopPage = lazy(() => import("pages/Shop"));
// const ShoppingCartPage = lazy(() => import("pages/ShoppingCart"));
// const LoginPage = lazy(() => import("pages/Login"));
// const RegisterPage = lazy(() => import("pages/Register"));
// const HistoryPage = lazy(() => import("pages/History"));
// const CouponsPage = lazy(() => import("pages/Coupons"));

const App = () => {
  // const dispatch = useDispatch();

  // const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refresh());
  // }, [dispatch]);

  return (
    <>
      <p>ciao</p>
    </>
  );
  // isRefreshing ? (
  //   <Loader />
  // ) : (
  //   <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<ShopPage />} />
  //       <Route path="shopping-cart" element={<ShoppingCartPage />} />
  //       <Route
  //         path="/login"
  //         element={<RestrictedRoute redirectTo="/" component={LoginPage} />}
  //       />
  //       <Route
  //         path="/register"
  //         element={<RestrictedRoute redirectTo="/" component={RegisterPage} />}
  //       />
  //       <Route
  //         path="history"
  //         element={<PrivateRoute redirectTo="/" component={HistoryPage} />}
  //       />
  //       <Route
  //         path="coupons"
  //         element={<PrivateRoute redirectTo="/" component={CouponsPage} />}
  //       />
  //       <Route path="*" element={<Navigate to="/" />} />
  //     </Route>
  //   </Routes>
  // );
};

export default App;
