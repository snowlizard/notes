import * as React from "react";
import { useState } from "react";
import { NotesList } from "./notesBar";
import { addNote } from "../redux/actions";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { TextField, Button, Divider } from "@mui/material";

interface obj {
    [key: string]: any
}

export const SideBar = () => {
    const [noteName, setNoteName] = useState('');
    const notes = useSelector((state: RootStateOrAny) => { return state.notesReducer })
    const currNote = useSelector( (state: RootStateOrAny) => { return state.currentNoteReducer})

    const dispatch = useDispatch();


    const addNewNote = () => {
        let note: obj = {};
        note[noteName] = "";
        dispatch(addNote(note));
    }

    return (
        <div id="sideBar">
            <div id="sideBar_components">
                <TextField id="addNoteField" label="add note"
                variant="filled" size="small"
                onKeyPress={ (e) => { if(e.key === 'Enter') addNewNote() }}
                onChange={ (e) => { setNoteName(e.target.value)}}>
                </TextField>

                <Button id="addNoteButton" variant="contained"
                size="medium" onClick={ addNewNote }
                >Add</Button>
            </div>
            <Divider variant="middle"/>
            <NotesList  notes={notes}/>

        </div>
    );
}
