import React from 'react'
import Carosel from './Carosel'
import '../Asserts/css/shop.css'
import Drawe from './Drawer'
const Shop = () => {
  return (
    <div className='shop'>
        <Drawe/>
        <p>kick start your shopping journey</p>
        <Carosel  name="mug" />
        <Carosel name="toy"/>
        <Carosel name="cake"/>
    </div>
  )
}

export default Shop