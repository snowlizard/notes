import * as React from "react";
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import { IconButton, ClickAwayListener } from "@mui/material";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Color, createColor, ColorBox } from "material-ui-color";


const fontSizes: Array<string> = ['10pt', '12pt', '14pt', '16pt',
                                '18pt', '24pt', '30pt', '36pt', '48pt',
                                '60pt', '72pt', '84pt'];

export const FontWidget = () => {
    const [ fSize, setSize] = useState('10pt');
    const [ bold, setBold] = useState(false);
    const [ color, setColor] = useState(createColor('black'));

    const [ open, setOpen] = useState(false);
    

    useEffect( () => {
        const text_area = document.getElementById('text_area');
        const selection = document.getSelection()

        // left off right here
        if (selection.containsNode(text_area, true)){
            selection.toString()
        }

        // font size
        text_area.style.fontSize = fSize;
        
        // font weight
        bold ? text_area.style.fontWeight = 'bold' :
        text_area.style.fontWeight = 'normal';

        // font color
        text_area.style.color = '#'+ color.hex;

    }, [fSize, bold, color]);

    const handleChange = (e: SelectChangeEvent) => {
        setSize(e.target.value);
    }

    const handleColorChange = (newColor: Color) => {
        setColor(newColor);
    }

    const handleClickAway = () => {
        setOpen(false)
    }

    return (
        <div id="text_styles">
            <FormControl variant="standard"
            sx={{ m: 1, minWidth: 55 }}>
                <Select labelId="fontSize-label"
                id="fontSize"
                value={fSize}
                onChange={ handleChange }>
                    {
                        fontSizes.map( (fontSize) => {
                            return (
                                <MenuItem key={fontSize} value={fontSize}>
                                { fontSize }
                                </MenuItem>
                            );
                        })
                    }
                </Select>
            </FormControl>
        
            <ClickAwayListener
            onClickAway={handleClickAway}>
                <Box sx={ {position: 'relative'}}>
                    <IconButton onClick={ () => setOpen(!open) }>
                        <ColorLensIcon />
                    </IconButton>
                    {
                        open ? (
                            <div id="color-box">
                                <ColorBox value={color}
                                onChange={ handleColorChange } />
                            </div>)
                        : null
                    }
                </Box>
            </ClickAwayListener>

            <IconButton
            onClick={ () => setBold(!bold) }>
                <FormatBoldIcon />
            </IconButton>
                    
        </div>
    );
}