import * as React from "react";
import { SideBar } from "./sideBar";
import { addNote } from "../redux/actions";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";

import { CKEditor } from 'ckeditor4-react';

interface obj {
    [key: string]: any
}

export const Main = () => {
    const notes = useSelector((state: RootStateOrAny) => { return state.notesReducer });
    const currNote = useSelector( (state: RootStateOrAny) => { return state.currentNoteReducer});
    const dispatch = useDispatch();

    const handleChange = (e: any) => {
        e.preventDefault();
        let note: obj = {};
        note[currNote] = e.target.value;
        dispatch(addNote(note));
    }

    return (
        <div id="main">
            <SideBar />
            <div id="text">
                <CKEditor
                config={ {bodyClass: "ckeditor"}}
                initData={<p>{ notes[currNote]}</p>}/>
            </div>
        </div>
    );
}


{/* <div id="text">
<div
id="text_area"
contentEditable={true}
onChange={ (e) => { handleChange(e) } }>
    <p>{notes[currNote]}</p>
</div>
</div> */}