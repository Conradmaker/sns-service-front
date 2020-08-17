import { put, call, takeEvery, delay } from "redux-saga/effects";
import produce from "immer";

const LOGIN_REQUEST = "user/LOGIN_REQUEST";
const LOGIN_SUCCESS = "user/LOGIN_SUCCESS";
const LOGIN_ERROR = "user/LOGIN_ERROR";

const LOGOUT_REQUEST = "user/LOGOUT_REQUEST";
const LOGOUT_SUCCESS = "user/LOGOUT_SUCCESS";
const LOGOUT_ERROR = "user/LOGOUT_ERROR";

export const logIn = (data) => ({ type: LOGIN_REQUEST, data });
export const logOut = () => ({ type: LOGOUT_REQUEST });
function* logInSaga(action) {
  try {
    //const data = yield call();
    yield delay(1000);
    yield put({ type: LOGIN_SUCCESS, data: action.data });
  } catch (e) {
    yield put({ type: LOGIN_ERROR, error: e });
  }
}
function* logOutSaga() {
  try {
    // const data = yield call()
    yield put({ type: LOGOUT_SUCCESS });
  } catch (e) {
    yield put({ type: LOGOUT_ERROR, error: e });
  }
}
export function* userSaga() {
  yield takeEvery(LOGIN_REQUEST, logInSaga);
  yield takeEvery(LOGOUT_REQUEST, logOutSaga);
}
const initialState = {
  logInDone: false,
  logInLoading: false,
  logInData: null,
  logInError: null,

  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
};

export default function user(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInData = null;
        draft.logInError = null;
        break;
      case LOGIN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.logInData = action.data;
        draft.logInError = null;
        break;
      case LOGIN_ERROR:
        draft.logInLoading = false;
        draft.logInDone = false;
        draft.logInData = null;
        draft.logInError = action.error;
        break;

      case LOGOUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case LOGOUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.logInDone = false;
        draft.logInData = null;
        draft.logOutError = null;
        break;
      case LOGOUT_ERROR:
        draft.logOutLoading = false;
        draft.logOutDone = false;
        draft.logOutError = action.error;
        break;
      default:
        break;
    }
  });
}
