import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import createBookWithId from '../../utilites/createBookWithId'
import { FaSpinner } from 'react-icons/fa'
import { ADD_BOOK, fetchFunction, selectedIsLoading } from "../../redux/slices/booksSlice"
import { setError } from "../../redux/slices/errorSlice"
import booksData from '../../../src/data/books.json'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const isLoading = useSelector(selectedIsLoading)
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
    } else dispatch(setError('you must fill author and title'))
  },
    handleAddRandomBook = (data) => {
      const randomBook = (data[Math.round(Math.random() * data.length)])
      dispatch(ADD_BOOK(createBookWithId(randomBook, 'Random')))
    }

  async function handleAddRandomBookWithAPI() {
    await dispatch(fetchFunction("http://localhost:4000/random-book"))
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
        <button type="button" disabled={isLoading} onClick={() => handleAddRandomBookWithAPI()}>{isLoading ? <><span>Loading.... </span><FaSpinner className="spinner" /></> : <span>Add Random with API</span>}</button>

      </form>

    </div>
  )
}

export default BookForm
