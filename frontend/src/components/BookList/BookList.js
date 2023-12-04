import { useDispatch, useSelector } from 'react-redux'
import { MdDelete, MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { selectTitle, selectAuthor } from '../../redux/slices/filterSlice'
import * as actiionCreators from '../../redux/books/actionCreators'
import './BookList.css'

const BookList = () => {
  // view from store only books
  const books = useSelector((state) => state.books)
  const titleFilter = useSelector(selectTitle)
  const authorFilter = useSelector(selectAuthor)
  const dispatch = useDispatch()
  const filterBooks = books.filter((book) => {
    const mathTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase())
    return mathTitle
  }).filter((book) => {
    const mathTitle = book.author.toLowerCase().includes(authorFilter.toLowerCase())
    return mathTitle
  })

  // delete books and return new array ans send in store
  const deleteBookButton = (id) => {
    dispatch(actiionCreators.deleteBook(id))
  }
  function handleToggleFavorite(id) {
    dispatch(actiionCreators.toggleFavorite(id))
  }

  return (
    <div className="app-block block-list">
      <h2>Book List</h2>
      {!filterBooks.length ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filterBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
                <span
                  onClick={() => {
                    handleToggleFavorite(book.id)
                  }}
                >
                  {book.isFavorite ? (
                    <MdOutlineFavorite className="star-icon" />
                  ) : (
                    <MdFavoriteBorder className="star-icon" />
                  )}
                </span>
                <button className="btnDelBook">
                  <MdDelete
                    className="star-icon"
                    onClick={() => deleteBookButton(book.id)}
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
