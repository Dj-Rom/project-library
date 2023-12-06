import { setTitleFilter, selectTitle, resetFilter, selectAuthor, setAuthorFilter, setOnlyFavoriteFilter, selectOnlyFavorite } from '../../redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'
import './Filter.css'
const Filter = () => {

  const dispatch = useDispatch()
  const title = useSelector(selectTitle)
  const author = useSelector(selectAuthor)
  const favoriteFilter = useSelector(selectOnlyFavorite)
  const handleChangeTitleFilter = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }
  const handleChangeAuthorFilter = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }

  const handleResetFilter = () => {
    dispatch(resetFilter())
  }
  const handleOnlyFavoriteBooks = () => {
    dispatch(setOnlyFavoriteFilter())
  }
  return (
    <div className="app-block filter">
      <div className='filter-row'>
        <div className="filter-group">
          <input type="text" value={title} onChange={handleChangeTitleFilter} placeholder="Filtet to title... .. ." />
        </div>
        <div className="filter-group">
          <input type="text" value={author} onChange={handleChangeAuthorFilter} placeholder="Filtet to author... .. ." />
        </div>
        <div className="filter-group">
          <label><input type="checkbox" checked={favoriteFilter} onChange={handleOnlyFavoriteBooks} /> Only Favorite</label>
        </div>
        <button onClick={handleResetFilter}>Reset Filter</button>
      </div>

    </div>
  )
}

export default Filter
