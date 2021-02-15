export interface IModalsState {
  errorModal: {
    message: string;
    isOpen: boolean;
  };
  successCloneModal: {
    message: string;
    isOpen: boolean;
  };
  successRemoveModal: {
    message: string;
    isOpen: boolean;
    callBack?: () => void;
  };
}

export const ActionTypes = {
  SET_ERROR_MODAL: '@@modal/SET_ERROR_MODAL',
  SET_SUCCESS_CLONE_MODAL: '@@modal/SET_SUCCESS_CLONE_MODAL',
  SET_SUCCESS_REMOVE_MODAL: '@@modal/SET_SUCCESS_REMOVE_MODAL',
};
