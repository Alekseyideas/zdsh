import { ActionTypes, IUserState } from './types';

export const setUser = (payload: IUserState['data']) => ({
  type: ActionTypes.SET_USER,
  payload,
});
