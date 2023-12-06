import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    title: '',
    author: '',
    onlyFavorite: false,
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
        setOnlyFavoriteFilter: (state) => {
            state.onlyFavorite = !state.onlyFavorite
        },
        resetFilter: () => {
            return initialState
        },
    }

})
export const selectTitle = (state) => state.filter.title
export const selectAuthor = (state) => state.filter.author
export const selectOnlyFavorite = (state) => state.filter.onlyFavorite

export const { setTitleFilter, resetFilter, setAuthorFilter, setOnlyFavoriteFilter } = filterSlice.actions

export default filterSlice.reducer