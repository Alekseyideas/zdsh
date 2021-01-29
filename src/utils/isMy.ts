import { IMethod, ITechniqe } from '../store/techniques/types';

export const isInMy = (id: IMethod['id'], isMy: boolean, data: ITechniqe['my']) =>
  isMy || data.includes(id);
