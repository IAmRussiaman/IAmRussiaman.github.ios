import React from 'react'
import s from './Header.module.scss'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { SearchContext } from '../../App'
import debounce from 'lodash.debounce'
import { useCallback } from 'react'
import { useState } from 'react'
import cartPNG from '../../assets/img/cart.png'
import { useSelector } from 'react-redux'
const Header = () => {
  let {search, setSearch} = useContext(SearchContext)
  const [localSearch,setLocalSearch] = useState('')
  let totalItemsCount = useSelector(state => state.cart.items.reduce((sum,elem) => {
    return sum + elem.count
  },0))
  let searchDebounce = useCallback(debounce((a) => {
    setSearch(a)
  },1000),[])
  return (
    <div className={s.headerContainer}>
        <div className={s.logo}>
        <Link to='/'><img src={logo}></img> </Link>
            <span>PerfumeApp</span>
        </div>      
        <div className={s.search}>
            <input onChange={(e)=>{setLocalSearch(e.target.value);searchDebounce(e.target.value)}} placeholder='Search for a perfume...' value={localSearch} ></input>
            {localSearch != '' ? <span onClick={()=>{searchDebounce('');setLocalSearch('')}}>X</span> : ''}
        </div>      
        <Link className={s.cartInfo} to={'/cart'}>
              <div className={s.cartImg}><img src={cartPNG}></img></div>
              <div className={s.cartNumber}>{totalItemsCount}</div>
              </Link>      
    </div>
  )
}

export default Header