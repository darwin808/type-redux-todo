export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}
export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}
export const addpeople = (data: { name: string, id: number }) => {
    return {
        type: 'ADD_PEOPLE', payload: data
    }
}

export const deletepeople = (id: number) => {
    return {
        type: 'DELETE_PEOPLE'
        ,
        payload: id
    }
}
export const updatepeople = (data: { idholder: number, edit: string }) => {
    return {
        type: 'UPDATE_PEOPLE'
        , payload: data
    }
}