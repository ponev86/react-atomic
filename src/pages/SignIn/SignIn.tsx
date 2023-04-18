import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { IS_AUTH, Paths } from 'src/constants';

const SignIn: FC = () => {
  const isAuthorized = IS_AUTH;

  if (isAuthorized) return <Navigate to={Paths.home} replace={true} />;

  return <div>SignIn Page</div>;
};

export default SignIn;
