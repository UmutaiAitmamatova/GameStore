// import React from 'react'
// import { Button } from '../button'
// import { calcTotalPrice } from '../utils'
// import './cart-menu.css'

// export const CartMenu = ({ items, onClick }) => {
//   return (
//     <div className='cart-menu'>
//         <div className="cart-menu_game-list">
//             {
//                 items.map((game) => game.title)
//             }
//         </div>
//         {
//             items.length > 0 ? 
//             <div className="cart-menu_arrange">
//                 <div className="cart-menu_total-price">
//                     <span>Итого:</span>
//                     <span>{calcTotalPrice(items)} руб.</span>
//                 </div>
//                 <Button type="primary" size="m" onClick={onClick}>
//                     Оформить заказ
//                 </Button>
//             </div>
//             : null
//         }
//     </div>
//   )
// }


import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../button";
import { CartItem } from "../../components/cart-item";
import { calcTotalPrice } from "../utils";
import "./cart-menu.css";

export const CartMenu = ({ onClick }) => {
    const items = useSelector((state) => state.cart.itemsInCart);
    return (
        <div className="cart-menu">
            <div className="cart-menu_games-list">
                {items.length > 0
                    ? items.map((game) => (
                        <CartItem
                            key={game.image}
                            image={game.image}
                            price={game.price}
                            title={game.title}
                            id={game.id}
                        />
                    ))
                    : "Корзина пуста"}
            </div>
            {items.length > 0 ? (
                <div className="cart-menu_arrange">
                    <div className="cart-menu_total-price">
                        <span>Итого:</span>
                        <span>{calcTotalPrice(items)} руб.</span>
                    </div>
                    <Button type="primary" size="m" onClick={onClick}>
                        Оформить заказ
                    </Button>
                </div>
            ) : null}
        </div>
    );
};




