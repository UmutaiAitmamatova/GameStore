import React from 'react'
import './cart-block.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const CartBlock = () => {
  return (
    <div className='cart-block'>
        <AiOutlineShoppingCart size={25} className='cart-block_icon'/>
        <span className='cart-block_total-price'>2313 руб.</span>
    </div>
  )
}
