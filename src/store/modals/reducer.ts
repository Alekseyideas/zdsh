import { Reducer } from 'redux';
import { ActionTypes, IModalsState } from './types';

const initialState: IModalsState = {
  errorModal: {
    isOpen: false,
    message: '',
  },
  successCloneModal: {
    isOpen: false,
    message: '',
  },
};

export const reducer: Reducer<IModalsState> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_ERROR_MODAL:
      return {
        ...state,
        errorModal: {
          isOpen: action.payload.isOpen,
          message: action.payload.message,
        },
      };
    case ActionTypes.SET_SUCCESS_CLONE_MODAL:
      return {
        ...state,
        successCloneModal: {
          isOpen: action.payload.isOpen,
          message: '',
        },
      };

    default:
      return state;
  }
};

export { reducer as ModalsReducer };
