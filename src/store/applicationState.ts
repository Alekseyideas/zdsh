import { IModalsState } from './modals/types';
import { ITechniquesState } from './techniques/types';

export interface AppState {
  Techniques: ITechniquesState;
  Modals: IModalsState;
}
