import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from 'react-icons/md'
import * as actiionCreators from '../../redux/books/actionCreators'
import './BookList.css'
const BookList = () => {
  // view from store only books
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()
  // delete books and return new array ans send in store
  const deleteBookButton = (id) => {
    console.log(id)

    dispatch(actiionCreators.deleteBook(id))
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
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
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
