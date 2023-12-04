import { useState } from "react"
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import * as actiionCreators from './../../redux/books/actionCreators'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = {
        'author': author,
        'title': title,
        'id': uuid()
      }
      dispatch(actiionCreators.addBook(book))
      setAuthor('')
      setTitle('')
    }
  }



  return (
    <div className="app-block book-form">
      <h2>Add a new Book</h2>
      <form onSubmit={handleSubmit}>
        <div><label htmlFor="title">Title:</label>
          <input type="text" id="title" maxLength="30" value={title} onChange={(e) => setTitle(e.target.value)} /></div>
        <div><label htmlFor="author">Author:</label>
          <input type="text" id="author" maxLength="18" value={author} onChange={(e) => setAuthor(e.target.value)} /></div>
        <button type="submit">Add Book</button>

      </form>

    </div>
  )
}

export default BookForm
