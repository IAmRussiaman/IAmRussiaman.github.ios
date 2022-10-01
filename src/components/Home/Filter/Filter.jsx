import React from 'react'
import { useDispatch } from 'react-redux'
import s from './Filter.module.scss'
import {setCurrentPageRedux} from '../../../redux/perfumeSlice'
const Filter = (props) => {
  let filterArray = ['All','Winter','Spring','Summer','Fall']
  let dispatch = useDispatch()
  let filterBoxes = filterArray.map((elem,key) => {
    return <div className={s.filterBox}>
      <div className = {props.filter === key ? s.active : ''}  
      onClick={() => {props.setFilter(key);dispatch(setCurrentPageRedux(1))}}>{elem}</div></div>
  })
    return (
    <div className={s.filter}>{filterBoxes}</div>
  )
}

export default Filter