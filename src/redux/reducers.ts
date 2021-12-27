interface data {
    [key: string]: any
}
 
export const notesReducer = (state: data = { "Pizza": 'ham'}, action: data) => {
    switch (action.type){
        case 'ADD_NOTE':
            return {
                ...state,
                ...action.note
            }
        case 'DELETE_NOTE':
            delete state[action.note]
            return { ... state}
        default:
            return state
    }
}


export const currentNoteReducer = (state: string = "", action: data) => {
    switch (action.type){
        case 'CURRENT_NOTE':
            return state = action.note
        default:
            return state
    }
}