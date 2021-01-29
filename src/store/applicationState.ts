import { IModalsState } from './modals/types';
import { ITechniquesState } from './techniques/types';
import { IUserState } from './user/types';

export interface AppState {
  Techniques: ITechniquesState;
  Modals: IModalsState;
  User: IUserState;
}
