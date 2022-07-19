import React, {useState} from 'react'
import { useNavigate } from "react-router";

import { useSelector } from 'react-redux'
import { CartMenu } from '../../components/cart-menu'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { calcTotalPrice } from '../utils'
import { ItemsInCart } from '../../components/items-in-cart'
import './cart-block.css'
import { useCallback } from 'react';

export const CartBlock = () => {
  const [isCartMenuVisble, setIsCartMenuVisivle] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items)
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    setIsCartMenuVisivle(false);
    navigate('./order')
  }, [navigate]);

  return (
    <div className='cart-block'>
        <ItemsInCart quantity={items.length}/>
        <AiOutlineShoppingCart 
        size={25} 
        className='cart-block_icon' 
        onClick={() => setIsCartMenuVisivle(!isCartMenuVisble)}/>
        { totalPrice > 0 ? <span className='cart-block_total-price'>{totalPrice} руб.</span> : null}
        { isCartMenuVisble && <CartMenu items={ items } onClick={handleClick}/>}
    </div>
  )
}
