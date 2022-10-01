import React from 'react'
import s from './Sort.module.scss'
import { useState } from 'react'
const Sort = (props) => {
  let sortArray = [
    {name:'Price(ASC)',order:'asc',title:'price'},
    {name:'Price(DESC)',order:'desc',title:'price'},
    {name:'Popularity(ASC)',order:'asc',title:'rating'},
    {name:'Popularity(DESC)',order:'desc',title:'rating'},
  ]
  
  const [popup, setPopup] = useState(false)
  let result = sortArray.map((elem,key) => {
     return <li onClick={()=> {
        props.setSort(elem)
        setPopup(false)
     }} className={elem.name == props.sort.name ? s.active : ''}>{elem.name}</li>
  })
    return (
    <div className={s.sort}>
        <span className={s.selected} onClick={()=> setPopup(!popup)}>  {props.sort.name}</span><span>Sort by : </span>
        {popup && (<div className={s.popup}>
            <ul>{result}</ul>
            </div>)}
    </div>
  )
}

export default Sort