import { ActionTypes, IModalsState } from './types';

export const setErrorModal = (payload: IModalsState['errorModal']) => ({
  type: ActionTypes.SET_ERROR_MODAL,
  payload,
});
export const setSuccessCloneModal = (payload: {
  isOpen: IModalsState['successCloneModal']['isOpen'];
}) => ({
  type: ActionTypes.SET_SUCCESS_CLONE_MODAL,
  payload,
});
