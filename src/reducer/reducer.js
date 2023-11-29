const initialState = {
    search: '',
    lines: [],
    stations: [],
}
const reducer = (state, action) => {
    switch (action.type){
        case 'Append_Stations':
            return {
                ...state,
                lines: action.payload.lines,
                stations: action.payload.stations
            }
        case 'Change_Value':
            return  {
                ...state,
                search: action.payload
            }

        default:
            return initialState
    }
}

export {reducer, initialState}