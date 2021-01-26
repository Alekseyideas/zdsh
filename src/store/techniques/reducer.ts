import { Reducer } from 'redux';
import { ActionTypes, ITechniquesState } from './types';

const initialState: ITechniquesState = {
  data: {
    all: [],
    my: [],
  },
  pending: false,
  loaded: false,
  error: false,
};

export const reducer: Reducer<ITechniquesState> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TECHNIQUES_R:
      return {
        ...state,
        pending: true,
        loaded: false,
        error: false,
      };
    case ActionTypes.GET_TECHNIQUES_S:
      return {
        data: action.payload.data || [],
        pending: false,
        loaded: true,
        error: false,
      };
    case ActionTypes.GET_TECHNIQUES_E:
      return {
        ...state,
        pending: false,
        loaded: true,
        error: true,
      };
    default:
      return state;
  }
};

export { reducer as TechniquesReducer };
