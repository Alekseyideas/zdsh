import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { callApi } from '../../utils/callApi';
import * as actions from './actions';
import { ActionTypes } from './types';

function* getTechniques() {
  try {
    const data = yield call(callApi, 'get', '../data/techniques.json');
    yield put(actions.getTechniquesS({ data }));
  } catch (e) {
    const message = JSON.stringify(e);
    console.log(message, 'message');
    yield put(actions.getTechniquesE());

    // yield put(Action.unZipE(e));
    // yield put(openErrorModal({ message: message === '{}' ? `${e}` : message }));
  } finally {
  }
}

function* watchFetchRequest() {
  yield takeEvery(ActionTypes.GET_TECHNIQUES_R, getTechniques);
}

export default function* techniquesSaga() {
  yield all([fork(watchFetchRequest)]);
}
