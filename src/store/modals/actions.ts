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
export const setSuccessRemoveModal = (payload: {
  isOpen: IModalsState['successRemoveModal']['isOpen'];
  callBack?: IModalsState['successRemoveModal']['callBack'];
}) => ({
  type: ActionTypes.SET_SUCCESS_REMOVE_MODAL,
  payload,
});
