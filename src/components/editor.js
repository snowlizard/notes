import React from "react";
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import {CKEditor} from '@ckeditor/ckeditor5-react'

import { addNote } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export const MyEditor = () => {
    const notes = useSelector((state) => { return state.notesReducer });
    const currNote = useSelector( (state) => { return state.currentNoteReducer});

    const [ckeditor, setEditor] = useState(null);

    const dispatch = useDispatch();

    useEffect( () => {
        if(ckeditor !== null){
            ckeditor.setData(notes[currNote])
        }
    }, [currNote]);

    const saveData = (editor) => {
        if(editor !== null){
            const data = editor.getData();
            let note = {};
            note[currNote] = data;
            console.log(currNote);
            dispatch(addNote(note));
        }
    }

    return (
        <div id="text">
            <CKEditor
                editor={ Editor }
                data={notes[currNote]}
                onReady={ editor => setEditor(editor) }
                config={{
                    autosave: {
                        save(editor){
                            saveData(editor)
                        }
                    }
                }}
                />
        </div>
    );
}
