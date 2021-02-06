import CounterReducer from './CounterReducer'
import PeopleReducer from './PeopleReducer'
import { combineReducers } from 'redux'

export const AllReducers = combineReducers({
    CounterReducer: CounterReducer,
    PeopleReducer: PeopleReducer
})

export type RootState = ReturnType<typeof AllReducers>