import React from 'react'
import { useSelector } from 'react-redux'
import s from './Pagination.module.scss'
const Pagination = (props) => {
    let pageSize = useSelector(state => state.allPerfumes.pageSize)
    let totalCount = useSelector(state => state.allPerfumes.totalCount)
    let a = Math.ceil(totalCount/pageSize)
    let arr = []
    for(let i = 1;i<=a;i++){
        arr.push(i)
    }
    let pagination = arr.map((elem,key) => {
        return <div className={s.pagiNumber} onClick={() => props.setCurrentPage(key+1)}>
            <div className={props.currentPage == key+1 ? s.active : ''}>{elem}</div>
            </div>
    })
    return (
    <div className={s.pagiBox}>{pagination}</div>
  )
}

export default Pagination