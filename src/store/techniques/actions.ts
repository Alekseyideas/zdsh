import { ActionTypes, ITechniqe } from './types';

export const getTechniquesR = () => ({
  type: ActionTypes.GET_TECHNIQUES_R,
});

export const getTechniquesS = (payload: { data: ITechniqe[] }) => ({
  type: ActionTypes.GET_TECHNIQUES_S,
  payload,
});

export const getTechniquesE = () => ({
  type: ActionTypes.GET_TECHNIQUES_E,
});
