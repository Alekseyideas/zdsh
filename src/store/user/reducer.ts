import { Reducer } from 'redux';
import { ActionTypes, IUserState } from './types';

const initialState: IUserState = {
  data: {
    isDemo: false,
    isAuth: false,
    token: '',
    error: '',
  },
};

export const reducer: Reducer<IUserState> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export { reducer as UserReducer };
