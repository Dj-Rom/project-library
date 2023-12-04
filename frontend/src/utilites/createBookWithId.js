import { v4 as uuid } from 'uuid'

const createBookWithId = (book) => {
    return {
        ...book, id: uuid(), isFavorite: false
    }
}

export default createBookWithId