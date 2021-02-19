export interface IMethod {
  title: string;
  id: number;
  url: string;
  isdemo: boolean;
}

export interface ITechniqe {
  all: {
    title: string;
    id: number;
    methods: IMethod[];
  }[];
  my: number[];
}

export interface ITechniquesState {
  data: ITechniqe;
  pending: boolean;
  loaded: boolean;
  error: boolean;
}

export const ActionTypes = {
  GET_TECHNIQUES_R: '@@techniques/GET_TECHNIQUES_R',
  GET_TECHNIQUES_S: '@@techniques/GET_TECHNIQUES_S',
  GET_TECHNIQUES_E: '@@techniques/GET_TECHNIQUES_E',

  REMOVE_FROM_MY_R: '@@techniques/REMOVE_FROM_MY_R',
  REMOVE_FROM_MY_S: '@@techniques/REMOVE_FROM_MY_S',
  REMOVE_FROM_MY_E: '@@techniques/REMOVE_FROM_MY_E',

  ADD_TO_MY_R: '@@techniques/ADD_TO_MY_R',
  ADD_TO_MY_S: '@@techniques/ADD_TO_MY_S',
  ADD_TO_MY_E: '@@techniques/ADD_TO_MY_E',
};
