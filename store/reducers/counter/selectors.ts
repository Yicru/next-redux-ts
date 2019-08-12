import { AppState } from "../../store.type";

export const getNumber = (state: AppState) => state.counter.number;
