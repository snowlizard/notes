interface data {
    [key: string]: any
}


let notes: data = JSON.parse(localStorage.getItem('notes'));
if ( notes === null){
    // @ts-ignore
    notes = localStorage.setItem('notes', JSON.stringify({}));
    notes = JSON.parse(localStorage.getItem('notes'));
}

export const notesReducer = (state: data = notes, action: data) => {
    switch (action.type){
        case 'ADD_NOTE':
            state = {
                ...state,
                ...action.note
            }
            localStorage.setItem('notes', JSON.stringify(state));
            return state;
        case 'DELETE_NOTE':
            delete state[action.note];
            localStorage.setItem('notes', JSON.stringify({...state}));
            return { ... state};
        default:
            return state;
    }
}


export const currentNoteReducer = (state: string = "", action: data) => {
    switch (action.type){
        case 'CURRENT_NOTE':
            return state = action.note;
        default:
            return state;
    }
}