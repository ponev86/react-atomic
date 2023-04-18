// import { AxiosResponse } from 'axios';

import agent from 'src/agent';

import { AuthRequest, TokenObtain } from './UserService.types';

export const signIn = async (authData: AuthRequest): Promise<TokenObtain> => {
  const res = await agent.POST<AuthRequest, TokenObtain>('auth', authData);
  return res.data;
};
