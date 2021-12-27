interface data {
    [key: string]: any
}


export const addNote = (note: data) => {
    return {
        type: 'ADD_NOTE',
        note
    };
}

export const deleteNote = (note: string) => {
    return {
        type: 'DELETE_NOTE',
        note
    };
}

export const currentNote = (note: string) => {
    return {
        type: 'CURRENT_NOTE',
        note
    }
}