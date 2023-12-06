import BookList from './components/BookList/BookList'
import BookForm from './components/BookForm/BookForm'
import Filter from './components/Filter/Filter'
import Error from './components/Error/Error'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Book library app</h1>

      </header>
      <div className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </div>
      <Error />
    </div>
  )
}

export default App
