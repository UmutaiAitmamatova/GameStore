// import React from 'react'
// import './cart-item.css'

// export const CartItem = ({
//     title,
//     price,
//     id
// }) => {
//   return (
//     <div className='cart-item'>
//         <span>{title}</span>
//         <div className="cart-item_price">
//             <span>{price} руб.</span>
//         </div>
//     </div>
//   )
// }


import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../redux/cart/reducer";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./cart-item.css";

export const CartItem = ({ title, price, id }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <div className="cart-item">
      <span>{title} </span>
      <div className="cart-item_price">
        <span>{price} руб.</span>
        <AiOutlineCloseCircle
          size={15}
          className="cart-item_delete-icon"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};