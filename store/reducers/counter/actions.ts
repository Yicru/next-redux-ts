import { CounterActionTypes } from "./types";
import { action } from "typesafe-actions";

export const increment = () => action(CounterActionTypes.INCREMENT);

export const incrementSuccess = () =>
  action(CounterActionTypes.INCREMENT_SUCCESS);

export const decrement = () => action(CounterActionTypes.DECREMENT);

export const decrementSuccess = () =>
  action(CounterActionTypes.DECREMENT_SUCCESS);

export const reset = () => action(CounterActionTypes.RESET);

export const resetSuccess = () => action(CounterActionTypes.RESET_SUCCESS);
