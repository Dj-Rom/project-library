import { setTitleFilter, selectTitle, resetFilter, selectAuthor, setAuthorFilter } from '../../redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'
import './Filter.css'
const Filter = () => {

  const dispatch = useDispatch(),
    title = useSelector(selectTitle),
    author = useSelector(selectAuthor)
  function handleChangeTitleFilter(e) {
    dispatch(setTitleFilter(e.target.value))
  }
  function handleChangeAuthorFilter(e) {
    dispatch(setAuthorFilter(e.target.value))
  }

  const handleResetFilter = () => {
    dispatch(resetFilter())
  }
  return (
    <div className="app-block filter">
      <div className='filter-row'>
        <div className="filter-group">
          <input type="text" value={title} onChange={handleChangeTitleFilter} placeholder="Filtet to title......" />
        </div>
        <div className="filter-group">
          <input type="text" value={author} onChange={handleChangeAuthorFilter} placeholder="Filtet to author......" />
        </div>
        <button onClick={handleResetFilter}>Reset Filter</button>
      </div>

    </div>
  )
}

export default Filter
