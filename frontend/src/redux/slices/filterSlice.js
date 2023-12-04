import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    title: ''
}

const filterSlice = createSlice({
    name: 'Filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            return { ...state, title: action.payload }
        },
        resetFilter: (state) => {
            return initialState
        }
    }

})
export const selectTitle = (state) => state.filter.title

export const { setTitleFilter, resetFilter } = filterSlice.actions

export default filterSlice.reducer