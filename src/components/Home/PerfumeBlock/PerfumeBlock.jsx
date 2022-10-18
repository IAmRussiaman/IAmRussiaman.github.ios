import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../../redux/cartSlice'
import s from './PerfumeBlock.module.scss'
import { Link } from 'react-router-dom'
const PerfumeBlock = (props) => {
    const cartItem = useSelector(state => state.cart.items.find(obj => obj.id === props.id))
    const dispatch = useDispatch()
    
    const itemCount = cartItem? cartItem.count: 0;
   
    return (
    <div className={s.box}>
        <Link to={`/perfumeInfo/${props.id}`}><div className={s.img}>
            <img src={props.imageUrl}></img>
        </div></Link>
        <div className={s.title}>{props.title}</div>
        <div className={s.type}>
            {props.types == 0 ? 'Original' : 'Tester'}
        </div>
        <div className={s.ml}>{props.sizes}ml</div>
        <div className={s.price}>{props.price}$</div>
        <div className={s.buy}>
            
            <div className={s.button} onClick={()=>{dispatch(addItem(props))}}>
                Add to Cart {itemCount == 0 ? '' : <span className={s.itemCount}>{itemCount > 0 && itemCount}</span> }
            </div>
        </div>
    </div>
  )
}

export default PerfumeBlock