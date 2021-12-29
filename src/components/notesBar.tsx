import * as React from "react";
import { deleteNote, currentNote } from "../redux/actions";
import { useDispatch } from "react-redux";
import { List, ListItemButton, ListItemText, ListItemIcon, Divider} from "@mui/material";
import { IconButton } from "@mui/material";
import { DeleteForeverOutlined } from "@mui/icons-material";

export const NotesList = (props: any) => {
    const dispatch = useDispatch();

    const deleteData = (key: string) => {
        dispatch(deleteNote(key));
    }

    const listItemAction = (key: string) => {
        dispatch(currentNote(key));
    }
    return (
        <List id="notesList" component="nav">
        {
            Object.keys(props.notes).map( key => {
                return (
                    <div className="noteItems" key={key + "1"}>
                        <IconButton aria-label="delete"
                        onClick={ () => deleteData(key) }>
                            <DeleteForeverOutlined />
                        </IconButton>
                        <ListItemButton 
                            onClick={ () => listItemAction(key) }>
                            <ListItemText>
                                {key}
                            </ListItemText>
                        </ListItemButton>
                        <Divider variant="middle" />
                    </div>
                );
            })
        }
    </List>
    );
}