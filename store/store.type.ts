import { Store } from "redux";
import { Task } from "redux-saga";
import { Counter } from "./reducers/counter/types";

export interface AppState {
  counter: Counter;
}

export interface ReduxSagaStore extends Store {
  sagaTask?: Task;
}
