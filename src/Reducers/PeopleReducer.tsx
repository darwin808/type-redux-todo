const initialState = {
    peoples: []
}

const PeopleReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_PEOPLE':
            return {
                ...state, peoples: [...state.peoples, action.payload]
            }
        case 'DELETE_PEOPLE':
            const newarr = state.peoples.filter((e: any) => e.id !== action.payload)
            return {
                ...state, peoples: newarr
            }

        case 'UPDATE_PEOPLE':
            const idholder: number = action.payload.idholder
            const edit: string = action.payload.edit
            const x = state.peoples.map((e: any) => e.id === idholder ? { ...e, name: edit } : e)
            return {
                ...state, peoples: x
            }

        default:

            return state
    }
}

export default PeopleReducer