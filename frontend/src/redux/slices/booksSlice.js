import { createSlice } from '@reduxjs/toolkit'


const initialState = []
const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        ADD_BOOK: (state, action) => {
            return [...state, action.payload]
        }, DELETE_BOOK: (state, action) => {
            return state.filter((book) => book.id !== action.payload)
        },
        TOGGLE_FAVORITE: (state, action) => {
            return state.map((book) => book.id === action.payload ? { ...book, isFavorite: !book.isFavorite } : book)
        },

    }

})



export const { TOGGLE_FAVORITE, DELETE_BOOK, ADD_BOOK } = booksSlice.actions
export const setBooks = (state) => state.books

export default booksSlice.reducer