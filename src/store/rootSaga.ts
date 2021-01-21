import { fork } from 'redux-saga/effects';
import techniquesSaga from './techniques/sagas';

export default function* rootSaga() {
  yield fork(techniquesSaga);
}
