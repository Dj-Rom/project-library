import { useDispatch, useSelector } from 'react-redux'
import { MdDelete, MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { selectTitle, selectAuthor, selectOnlyFavorite } from '../../redux/slices/filterSlice'
import { DELETE_BOOK, TOGGLE_FAVORITE, setBooks } from '../../redux/slices/booksSlice'
// import * as actiionCreators from '../../redux/books/actionCreators'
import './BookList.css'

const BookList = () => {

  const books = useSelector(setBooks)
  const titleFilter = useSelector(selectTitle)
  const authorFilter = useSelector(selectAuthor)
  const onlyFavoriteFilter = useSelector(selectOnlyFavorite)
  const dispatch = useDispatch()
  const filterBooks = books.filter((book) => {
    const mathTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase())
    const mathAuthor = book.author.toLowerCase().includes(authorFilter.toLowerCase())
    const mathFavorite = onlyFavoriteFilter ? book.isFavorite : true
    return mathTitle && mathAuthor && mathFavorite
  })

  const hightlightMath = (text, filter) => {
    if (!filter) return text
    const regex = new RegExp(`(${filter})`, 'gi')
    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (<span key={i} className='highlight'>{substring}</span>)
      } return substring
    })
  }
  const deleteBookButton = (id) => {
    dispatch(DELETE_BOOK(id))
  }
  const handleToggleFavorite = (id) => {
    dispatch(TOGGLE_FAVORITE(id))
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
                {++i}. {hightlightMath(book.title, titleFilter)} by <strong>{hightlightMath(book.author, authorFilter)}</strong> {book.source}
              </div>
              <div className="book-actions">
                <span onClick={() => {
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
