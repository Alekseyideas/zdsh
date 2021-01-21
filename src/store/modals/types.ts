export interface IModalsState {
  errorModal: {
    message: string;
    isOpen: boolean;
  };
}

export const ActionTypes = {
  SET_ERROR_MODAL: '@@modal/SET_ERROR_MODAL',
};
