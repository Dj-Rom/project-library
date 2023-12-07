import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import createBookWithId from './../../utilites/createBookWithId'
import { setError } from './errorSlice'

const initialState = {
    books: [],
    isLoading: false
}
export const fetchFunction = createAsyncThunk('books/fetchBook', async (url, thunkAPI) => {
    ;
    try {
        const response = await axios.get(url);
        return response.data
    } catch (error) {
        thunkAPI.dispatch(setError(error.message))
        throw error
    }
})
const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        ADD_BOOK: (state, action) => {
            state.books.push(action.payload)
        }, DELETE_BOOK: (state, action) => {
            return { ...state, books: state.books.filter((book) => book.id !== action.payload) }
        },
        TOGGLE_FAVORITE: (state, action) => {
            return { ...state, books: state.books.map((book) => book.id === action.payload ? { ...book, isFavorite: !book.isFavorite } : book) }
        },
    },
    extraReducers: {
        [fetchFunction.pending]: (state,) => {
            state.isLoading = true
        },
        [fetchFunction.fulfilled]: (state, action) => {
            state.isLoading = false
            if (action.payload.title && action.payload.author) {
                state.books.push(createBookWithId(action.payload))
            }
        },
        [fetchFunction.rejected]: (state,) => {
            state.isLoading = false
        },

    }
    // OR 
    // extraReducers: (builder) => {
    //     builder.addCase(fetchFunction.fulfilled, (state, action) => {
    //         if (action.payload.title && action.payload.author) {
    //             state.push(createBookWithId(action.payload))
    //         }
    //     })
    // }

}
)

export const { TOGGLE_FAVORITE, DELETE_BOOK, ADD_BOOK } = booksSlice.actions
export const setBooks = (state) => state.books.books
export const selectedIsLoading = (state) => state.books.isLoading

export default booksSlice.reducer