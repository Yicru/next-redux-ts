import { all, call } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";

import counterSaga from "./reducers/counter/saga";

es6promise.polyfill();

function* rootSaga() {
  yield all([call(counterSaga)]);
}

export default rootSaga;
