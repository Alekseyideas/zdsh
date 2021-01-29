import { ActionTypes, IMethod, ITechniqe } from './types';

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

export const removeFromMyR = (payload: { id: IMethod['id'] }) => ({
  type: ActionTypes.REMOVE_FROM_MY_R,
  payload,
});
export const removeFromMyS = (payload: { id: IMethod['id'] }) => ({
  type: ActionTypes.REMOVE_FROM_MY_S,
  payload,
});
export const removeFromMyE = () => ({
  type: ActionTypes.REMOVE_FROM_MY_E,
});

export const addToMyR = (payload: { id: IMethod['id'] }) => ({
  type: ActionTypes.ADD_TO_MY_R,
  payload,
});
export const addToMyS = (payload: { id: IMethod['id'] }) => ({
  type: ActionTypes.ADD_TO_MY_S,
  payload,
});
export const addToMyE = () => ({
  type: ActionTypes.ADD_TO_MY_E,
});
