import React from 'react'
import s from './Cart.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import trashCan from '../../assets/img/trashcan.png'
import { setCountMinus,setCountPlus,clearCart,deleteCategory} from '../../redux/cartSlice'
import emptyCart from '../../assets/img/empty-cart.png'
const Cart = () => {
  let cartItems = useSelector(state => state.cart.items)
  let total = useSelector (state => state.cart.totalPrice)
  let dispatch = useDispatch()
  let cartItem = cartItems.map(elem => {
    return <div className={s.cartItem}>
    <div className={s.img}><img src={elem.imageUrl}></img></div>
    <div className={s.title}>{elem.title}</div>
    <div className={s.field}>{elem.count > 0 ? elem.count : dispatch(deleteCategory(elem.id))}</div>
    <div className={s.field}>{elem.price}$</div>
    <div className={s.fieldminus} onClick={() => dispatch(setCountMinus(elem))}> -</div>
    <div className={s.field}>{elem.price * elem.count}$</div>
    <div className={s.fieldminus} onClick={() => dispatch(setCountPlus(elem))} > +</div>
  </div>
  })
  return (
    <div className={s.main}>
      { total > 0 ? <div className={s.cart}>
        <div className={s.cartItem}>
        <div className={s.img}>Picture</div>
    <div className={s.title}>Name</div>
    <div className={s.field}>Quantity</div>
    <div className={s.field}>Price</div>
    <div className={s.field}></div>
    <div className={s.field}></div>
    <div className={s.field}></div>
        </div>
        {cartItem}
        <div className={s.cartItemtotal}>
          <div className={s.eraseAll}><img src={trashCan} onClick={() => dispatch(clearCart())}></img></div> <div className={s.total}>Total : {total}$</div>
        </div>
      </div> : <div className={s.emptyCart} ><div className={s.element}><img src={emptyCart}></img></div>
      <div className={s.element}>Cart is empty</div></div>}
    </div>
  )
}

export default Cart