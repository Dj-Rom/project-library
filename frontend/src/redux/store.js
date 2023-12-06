import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice.js'
// import bookReducer from './books/reducer'
import booksSlice from './slices/booksSlice.js'

const store = configureStore({
    reducer: {
        books: booksSlice,
        filter: filterSlice
    }
})

export default store