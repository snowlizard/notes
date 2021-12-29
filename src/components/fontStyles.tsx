import * as React from "react";
import { IconButton } from "@mui/material";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const fontSizes: Array<string> = ['10pt', '12pt', '14pt', '16pt',
                                '18pt', '24pt', '30pt', '36pt', '48pt',
                                '60pt', '72pt', '84pt'];

export const FontWidget = () => {
    const [ fSize, setSize] = React.useState('10pt');
    const [ bold, setBold] = React.useState(false)

    React.useEffect( () => {
        document.querySelector('textarea').style.fontSize = fSize;
        
        bold ? document.querySelector('textarea').style.fontWeight = 'bold' :
        document.querySelector('textarea').style.fontWeight = 'normal';

    }, [fSize, bold]);

    const handleChange = (e: SelectChangeEvent) => {
        setSize(e.target.value);
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

            <IconButton>
                <ColorLensIcon />
            </IconButton>

            <IconButton
            onClick={ () => setBold(!bold) }>
                <FormatBoldIcon />
            </IconButton>
                    
        </div>
    );
}