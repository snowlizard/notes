import * as React from "react";
import { deleteNote } from "../redux/actions";
import { useDispatch } from "react-redux";
import { List, ListItemButton, ListItemText, ListItemIcon} from "@mui/material";
import { DeleteForeverOutlined } from "@mui/icons-material";

export const NotesList = (props: any) => {
    const dispatch = useDispatch();

    const deleteData = (key: string) => {
        dispatch(deleteNote(key));
    }

    const listItemAction = (key: string) => {
        console.log(key)
    }
    return (
        <List component="nav">
        {
            Object.keys(props.notes).map( key => {
                return (
                    <ListItemButton key={key + "1"} 
                        onClick={ () => listItemAction(key) }>
                        <ListItemIcon onClick={ () => deleteData(key) }>
                            <DeleteForeverOutlined />
                        </ListItemIcon>
                        <ListItemText>
                            {key}
                        </ListItemText>
                    </ListItemButton>
                );
            })
        }
    </List>
    );
}