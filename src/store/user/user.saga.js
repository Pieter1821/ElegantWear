import { takeLatest, all, put, call } from 'redux-saga/effects';

import { USER_ACTION_TYPES } from './user.types';

import { signInFailed } from './user.action';

import { getCurrentUser, createUserDocumentFromAuth } from '../../utils/firebase/firebase';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
    console.log(userSnapshot);
    console.log(userSnapshot.data());

    if (userSnapshot) {
      const userData = { id: userSnapshot.id, ...userSnapshot.data() };
      yield put(signInSuccess(userData));
    }
  } catch (error) {
    yield put(signInFailed(`Failed to get user snapshot: ${error.message}`));
  }
}


export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([call(onCheckUserSession)]);
}
