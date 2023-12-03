
import { useDispatch, useStore, useSelector } from 'react-redux'
import * as actiionCreators from '../../redux/books/actionCreators'
import './BookList.css'
const BookList = () => {
  // view from store only books
  const books = useSelector((state) => state.books),
    store = useStore(),
    dispatch = useDispatch(),
    // delete books and return new array ans send in store
    deleteBookButton = (e) => {
      e.preventDefault()
      dispatch(actiionCreators.deleteBook(store.getState().books.filter((book) => (book.id !== (e.target.className)))))


    }
  return (
    <div className="app-block block-list">
      <h2>Book List</h2>
      {!books.length ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}.{book.title} by <strong>{book.author}</strong>
                <button className={book.id} onClick={deleteBookButton}>D</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
