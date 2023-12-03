import * as a from "./actionTypes"

const initialState = []
const bookReducer = (store = initialState, action) => {
    switch (action.type) {
        case a.ADD_BOOK:
            return [...store, action.payload]
        case a.DELETE_BOOK:
            return [...action.payload];
        default:
            return store
    }
}
export default bookReducer
