import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice.js'
import bookReducer from './books/reducer'

const store = configureStore({
    reducer: {
        books: bookReducer,
        filter: filterSlice
    }
})

export default store