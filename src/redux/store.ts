import { createStore } from "redux";
import { notesReducer } from "./reducers";


export const store = createStore(notesReducer);