import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import createBookWithId from './../../utilites/createBookWithId'

const initialState = []
export const fetchFunction = createAsyncThunk('books/fetchBook', async () => {
    const response = await axios.get("http://localhost:4000/random-book");


    return response.data
})
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFunction.fulfilled, (state, action) => {
            if (action.payload.title && action.payload.author) {
                state.push(createBookWithId(action.payload))
            }
        })
    }

}
)

export const { TOGGLE_FAVORITE, DELETE_BOOK, ADD_BOOK } = booksSlice.actions
export const setBooks = (state) => state.books

export default booksSlice.reducer