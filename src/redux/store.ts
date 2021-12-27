import { createStore, combineReducers } from "redux";
import { notesReducer, currentNoteReducer } from "./reducers";

const reducers = combineReducers({notesReducer, currentNoteReducer});

export const store = createStore(reducers);