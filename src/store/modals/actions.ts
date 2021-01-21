import { ActionTypes, IModalsState } from './types';

export const setErrorModal = (payload: IModalsState['errorModal']) => ({
  type: ActionTypes.SET_ERROR_MODAL,
  payload,
});
