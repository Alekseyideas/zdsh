export interface IUserState {
  data: {
    isDemo: boolean;
    isAuth: boolean;
    token: string;
    error: string;
  };
}

export const ActionTypes = {
  SET_USER: '@@modal/SET_USER',
};
