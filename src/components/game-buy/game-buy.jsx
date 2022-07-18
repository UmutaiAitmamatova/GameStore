import React from 'react'
import { useDispatch } from 'react-redux'
import './game-buy.css'
import { Button } from '../button'
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer'
import { useSelector } from 'react-redux'

export const  GameBuy = ({ game }) => {
  const dispatsh = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart)
  const isItemInCart = items.some((item) => item.id === game.id)

  const handleClick = (e) => {
    e.stopPropagation();
    if(isItemInCart){
      dispatsh(deleteItemFromCart(game.id));
    }else{
      dispatsh(setItemInCart(game))
    }
  }
  return (
    <div className='game-buy'>
        <span className='game-buy_price'>{game.price} руб.</span>
        <Button
        type={isItemInCart ? 'secondary' : 'primary'}
        onClick={handleClick}
        >
        { isItemInCart ? 'Убрать из корзины' : 'В Корзину'}
        </Button>

    </div>
  )
}
