export interface IMethod {
  title: string;
  id: number;
}

export interface ITechniqe {
  title: string;
  id: number;
  methods: IMethod[];
}

export interface ITechniquesState {
  data: ITechniqe[];
  pending: boolean;
  loaded: boolean;
  error: boolean;
}

export const ActionTypes = {
  GET_TECHNIQUES_R: '@@techniques/GET_TECHNIQUES_R',
  GET_TECHNIQUES_S: '@@techniques/GET_TECHNIQUES_S',
  GET_TECHNIQUES_E: '@@techniques/GET_TECHNIQUES_E',
};
