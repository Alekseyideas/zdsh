import { combineReducers } from 'redux';
import { ModalsReducer } from './modals/reducer';
import { TechniquesReducer } from './techniques/reducer';
import { UserReducer } from './user/reducer';

const rootReducer = combineReducers({
  Techniques: TechniquesReducer,
  Modals: ModalsReducer,
  User: UserReducer,
});

export default rootReducer;
