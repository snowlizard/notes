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
        ckeditor !== null ? ckeditor.setData(notes[currNote])
        : 'do nothing';
    }, [currNote]);

    if ( ckeditor !== null ){
        // working but do not use makes browser window
        // over work and makes window unresponsive

        // ckeditor.model.document.on('change:data', () => {
        //     const data = ckeditor.getData();

        //     let note= {}
        //     note[currNote] = data
        //     dispatch(addNote(note));
        // });
    }

    return (
            <CKEditor
                id='editor'
                editor={ Editor }
                data={notes[currNote]}
                onReady={ (editor) => setEditor(editor) }
                />
    );
}