import React from 'react'
import Filter from './Filter/Filter'
import PerfumeBlock from './PerfumeBlock/PerfumeBlock'
import Sort from './Sort/Sort'
import s from './Home.module.scss'
import {fetchPerfumesThunk,setCurrentPageRedux} from '../../redux/perfumeSlice'
import { useEffect  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setSortInfo,setFilterId} from '../../redux/filterSlice'
import Pagination from '../Pagination/Pagination'
import { useContext } from 'react'
import { SearchContext } from '../../App'
import {activatePreloader} from '../../redux/perfumeSlice'
import Preloader from '../Preloader/Preloader'


const Home = () => {
    let perfumes = useSelector(state => state.allPerfumes.perfumes)
    let dispatch = useDispatch()
    let sort = useSelector(state => state.filter.sort)
    let filter = useSelector(state => state.filter.filterId)
    let currentPage = useSelector (state=>state.allPerfumes.currentPage)
    let {search,setSearch} = useContext(SearchContext)
    let preloader = useSelector(state => state.allPerfumes.preloader)
    useEffect(() => {
      let data = {
        filter,
        sortTitle: sort.title,
        sortOrder: sort.order,
        currentPage,
        search
      }
      dispatch(fetchPerfumesThunk(data));
      dispatch(activatePreloader(true))
     
    }, [filter,sort,currentPage,search])
   
    let result = perfumes.map((elem,key) => {
        return <PerfumeBlock {...elem}></PerfumeBlock>
    })
    return (
    <div>
        <div className={s.menu}>
    <Filter filter = {filter} setFilter = {(id) => dispatch(setFilterId(id))}></Filter>
    <Sort sort={sort} setSort = {(elem) => dispatch(setSortInfo(elem))}></Sort>
    </div>
    {preloader ? <Preloader></Preloader> : <><div className={s.container}>
        {result}
    </div>
    <Pagination currentPage={currentPage} setCurrentPage = {(num) => {dispatch(setCurrentPageRedux(num))}}></Pagination> </>}
   
    </div>
  )
}

export default Home