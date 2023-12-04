import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    title: '',
    author: '',
}

const filterSlice = createSlice({
    name: 'Filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            return { ...state, title: action.payload }
        }, setAuthorFilter: (state, action) => {
            return { ...state, author: action.payload }
        },
        resetFilter: (state) => {
            return initialState
        },
    }

})
export const selectTitle = (state) => state.filter.title
export const selectAuthor = (state) => state.filter.author

export const { setTitleFilter, resetFilter, setAuthorFilter } = filterSlice.actions

export default filterSlice.reducer