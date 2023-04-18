import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Paths } from 'src/constants';
import { Home, SignIn, Private } from 'src/pages';

import { PrivateRoute } from './elements';

const Router: FC = () => {
  return (
    <Routes>
      <Route path={Paths.home} element={<Home />} />
      <Route path={Paths.signIn} element={<SignIn />} />

      <Route element={<PrivateRoute />}>
        <Route path={Paths.private} element={<Private />} />
      </Route>

      <Route path="*" element={<Navigate to={Paths.home} replace />} />
    </Routes>
  );
};

export default Router;
