import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { callApi } from '../../utils/callApi';
import { setErrorModal, setSuccessCloneModal, setSuccessRemoveModal } from '../modals/actions';
import * as actions from './actions';
import { ActionTypes } from './types';

function* getTechniques() {
  try {
    const data = yield call(callApi, 'get', '/catalog/');
    //console.log(data);
    yield put(actions.getTechniquesS({ data }));
  } catch (e) {
    const message = JSON.stringify(e);
    yield put(setErrorModal({ message, isOpen: true }));
    yield put(actions.getTechniquesE());
  } finally {
  }
}

function* removeFromMy(action: ReturnType<typeof actions.removeFromMyR>) {
  try {
    yield call(callApi, 'get', `/deletecard/${action.payload.id}`);
    yield put(setSuccessRemoveModal({ isOpen: true }));
    yield put(actions.removeFromMyS(action.payload));
  } catch (e) {
    const message = JSON.stringify(e);
    yield put(setErrorModal({ message, isOpen: true }));
    yield put(actions.removeFromMyE());
  } finally {
  }
}
function* addToMy(action: ReturnType<typeof actions.addToMyR>) {
  try {
    const data = yield call(callApi, 'get', `/addcard/${action.payload.id}`);
    console.log(data);
    yield put(actions.addToMyS(action.payload));
    yield put(setSuccessCloneModal({ isOpen: true }));
  } catch (e) {
    const message = JSON.stringify(e);
    yield put(setErrorModal({ message, isOpen: true }));
    yield put(actions.addToMyE());
  } finally {
  }
}

function* watchFetchRequest() {
  yield takeEvery(ActionTypes.GET_TECHNIQUES_R, getTechniques);
  yield takeEvery(ActionTypes.REMOVE_FROM_MY_R, removeFromMy);
  yield takeEvery(ActionTypes.ADD_TO_MY_R, addToMy);
}

export default function* techniquesSaga() {
  yield all([fork(watchFetchRequest)]);
}
