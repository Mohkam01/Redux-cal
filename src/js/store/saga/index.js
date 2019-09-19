import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { SHOW } from "../../constants/action-types";

function* callOther(action) {
  var payload = "i am called during int1 call";
  yield put({ type: SHOW, payload });
}

function* catchCall() {
  yield takeEvery("SET_INT1", callOther);
}
export default catchCall;
