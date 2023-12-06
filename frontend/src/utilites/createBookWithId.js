import { v4 as uuid } from 'uuid'

const createBookWithId = (book, source) => {
    return {
        ...book, id: uuid(), isFavorite: false, source,
    }
}

export default createBookWithId