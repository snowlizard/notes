import * as React from "react";
import { useState } from "react";
import { NotesList } from "./notesBar";
import { addNote, currentNote } from "../redux/actions";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { TextField, Button, Divider } from "@mui/material";

interface obj {
    [key: string]: any
}

export const SideBar = () => {
    const [noteName, setNoteName] = useState('');
    const notes = useSelector((state: RootStateOrAny) => { return state.notesReducer });
    const currNote = useSelector((state: RootStateOrAny) => { return state.currentNoteReducer });
    const dispatch = useDispatch();

    // set the current note to the first available note
    if(currNote === '' && Object.keys(notes).length > 0 ){
        dispatch(currentNote(Object.keys(notes)[0]))
    };

    // creates new note if note exists set it as
    // the current note
    const addNewNote = () => {
        let note: obj = {};
        
        if (notes.hasOwnProperty(noteName)){
            dispatch(currentNote(noteName));
        }else{
            note[noteName] = "";
            dispatch(addNote(note));
        }
    }

    return (
        <div id="sideBar">
            <div id="sideBar_components">
                <TextField id="addNoteField" label="add/select note"
                variant="filled" size="small"
                onKeyPress={ (e) => { if(e.key === 'Enter') addNewNote() }}
                onChange={ (e) => { setNoteName(e.target.value)}}>
                </TextField>

                <Button id="addNoteButton" variant="contained"
                size="medium" onClick={ addNewNote }
                >Add</Button>
            </div>
            <p id="currentNote">
                { currNote }
            </p>
            <Divider variant="middle"/>
            <NotesList  notes={notes}/>
        </div>
    );
}
