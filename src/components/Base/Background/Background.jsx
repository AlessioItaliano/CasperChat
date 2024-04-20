import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'layout/Header';
import Footer from 'layout/Footer';
import Loader from 'components/Common/Loader';

import * as s from './Background.styled';

const Background = () => {
  return (
    <>
      <s.Port>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </s.Port>
      <Footer />
    </>
  );
};

export default Background;
