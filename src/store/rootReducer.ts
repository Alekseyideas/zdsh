import { combineReducers } from 'redux';
import { ModalsReducer } from './modals/reducer';
import { TechniquesReducer } from './techniques/reducer';

const rootReducer = combineReducers({
  Techniques: TechniquesReducer,
  Modals: ModalsReducer,
});

export default rootReducer;
