import * as React from "react";
import { SideBar } from "./sideBar";
import { FontWidget } from "./fontStyles";
import { addNote } from "../redux/actions";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";

interface obj {
    [key: string]: any
}

export const Main = () => {
    const notes = useSelector((state: RootStateOrAny) => { return state.notesReducer });
    const currNote = useSelector( (state: RootStateOrAny) => { return state.currentNoteReducer});
    const dispatch = useDispatch();

    const handleChange = (e: any) => {
        let note: obj = {};
        note[currNote] = e.target.value;
        dispatch(addNote(note));
    }

    return (
        <div id="main">
            <SideBar />
            <div id="text">
                <FontWidget />
                <textarea
                value={notes[currNote]}
                onChange={ (e) => { handleChange(e) } }>
                </textarea>
            </div>
        </div>
    );
}