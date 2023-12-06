import { useState } from "react"
import { useDispatch } from 'react-redux'
import createBookWithId from '../../utilites/createBookWithId'
// import * as actiionCreators from './../../redux/books/actionCreators'
import { ADD_BOOK, } from "../../redux/slices/booksSlice"
import booksData from '../../../src/data/books.json'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = {
        title, author
      }
      dispatch(ADD_BOOK(createBookWithId(book, 'Manual')))
      setAuthor('')
      setTitle('')
    }
  },
    handleAddRandomBook = (data) => {
      const randomBook = (data[Math.round(Math.random() * data.length)])
      dispatch(ADD_BOOK(createBookWithId(randomBook, 'Random')))
    }

  async function handleAddRandomBookWithAPI(data) {

    try {
      const response = await fetch("http://localhost:4000/random-book");
      const randomBook = await response.json();
      if (randomBook.title && randomBook.author && randomBook) {
        dispatch(ADD_BOOK(createBookWithId(randomBook, 'API')))

      }
    } catch {
      alert(Error());

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
        <button type="button" onClick={() => handleAddRandomBook(booksData)}>Add Random</button>
        <button type="button" onClick={() => handleAddRandomBookWithAPI()}>Add Random with API</button>

      </form>

    </div>
  )
}

export default BookForm
