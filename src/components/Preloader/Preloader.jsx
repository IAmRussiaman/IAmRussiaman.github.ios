import React from 'react'
import preloaderGif from '../../assets/gif/preloader.gif'
import s from './Preloader.module.scss'
const Preloader = () => {
  return (
    <div className={s.preloader}><img src = {preloaderGif}></img></div>
  )
}

export default Preloader