import React from "react";
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import {CKEditor} from '@ckeditor/ckeditor5-react'
import { addNote } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";


export const MyEditor = () => {
    const notes = useSelector((state) => { return state.notesReducer });
    const currNote = useSelector( (state) => { return state.currentNoteReducer});
    let chars = 0;

    const [ckeditor, setEditor] = useState(null);

    const dispatch = useDispatch();

    const saveData = (editor) => {
        if(editor !== null){
            const data = editor.getData();
            let note = {};
            note[currNote] = data;
            dispatch(addNote(note));
        }
    }

    return (
        <div id="text">
            <CKEditor
                editor={ Editor }
                data={notes[currNote] !== undefined ? notes[currNote] : "" }
                onReady={ editor => setEditor(editor) }
                onChange={ () => {
                    chars += 1;
                    if(chars === 3 ){
                        chars = 0;
                        saveData(ckeditor);
                    }
                }}
                />
        </div>
    );
}
