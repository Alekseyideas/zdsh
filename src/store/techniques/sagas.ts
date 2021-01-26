import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { callApi } from '../../utils/callApi';
import { setErrorModal } from '../modals/actions';
import * as actions from './actions';
import { ActionTypes } from './types';

function* getTechniques() {
  try {
    const data = yield call(callApi, 'get', '../data/techniques.json');
    yield put(actions.getTechniquesS({ data }));
  } catch (e) {
    const message = JSON.stringify(e);
    yield put(setErrorModal({ message, isOpen: true }));
    yield put(actions.getTechniquesE());
  } finally {
  }
}

function* watchFetchRequest() {
  yield takeEvery(ActionTypes.GET_TECHNIQUES_R, getTechniques);
}

export default function* techniquesSaga() {
  yield all([fork(watchFetchRequest)]);
}
