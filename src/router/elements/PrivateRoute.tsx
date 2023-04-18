import { FC } from 'react';
import { Navigate, useOutlet } from 'react-router-dom';

import { IS_AUTH, Paths } from 'src/constants';

const PrivateRoute: FC = () => {
  const isAuthorized = IS_AUTH;
  const outlet = useOutlet();

  if (!isAuthorized) {
    return <Navigate to={Paths.signIn} replace={true} />;
  }

  return <>{outlet}</>;
};

export default PrivateRoute;
