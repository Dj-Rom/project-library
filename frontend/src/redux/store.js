import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice.js'
import booksSlice from './slices/booksSlice.js'
import errorSlice from './slices/errorSlice.js'
const store = configureStore({
    reducer: {
        books: booksSlice,
        filter: filterSlice,
        error: errorSlice,
    }
})

export default store