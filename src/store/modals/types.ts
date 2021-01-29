export interface IModalsState {
  errorModal: {
    message: string;
    isOpen: boolean;
  };
  successCloneModal: {
    message: string;
    isOpen: boolean;
  };
}

export const ActionTypes = {
  SET_ERROR_MODAL: '@@modal/SET_ERROR_MODAL',
  SET_SUCCESS_CLONE_MODAL: '@@modal/SET_SUCCESS_CLONE_MODAL',
};
