import React from "react";
import basket from "../../.././img/basketCart.svg";
import basketMini from "../../.././img/basketMini.svg";
import miniPizza from "../../.././img/miniPizza.svg";
import remove from "../../.././img/close.svg";
import s from "./Cart.module.css";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import { Empty } from "./Empty/Empty";
import { useSelector, useDispatch } from "react-redux";
import { removePizza } from "../../../Redux/slices/cartSlice";
export const Cart = () => {
  const { totalPrice, pizza } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // if(totalPrice == 0){
  //   <Empty/>
  // }else{
  //   <CartItem/>
  // }

  const removePizzaFun = () => {
    if (window.confirm("Вы действительно хотите очистить корзину?")) {
      dispatch(removePizza(pizza.id));
    }
  };

  return (
    <div className={s.cartBlock}>
      {
        totalPrice == 0 ? <Empty/> : <>
        <div className={s.basketBlock}>
          <img src={basket} alt="basket" />
          <div onClick={() => removePizzaFun()} className={s.removeCart}>
            <img src={basketMini} alt="basket" />
            <p>Очистить карзину</p>
          </div>
        </div>
        {pizza.map((obj) => (
          <CartItem key={obj.id} {...obj} />
        ))}
        <div className={s.countPriceBlock}>
          <div>
            <p>
              Всего пицц: <b>{pizza.length} шт.</b>
            </p>
          </div>
          <div>
            <p>
              Сумма заказа: <span>{totalPrice} ₽</span>
            </p>
          </div>
        </div>
        <div className={s.buttonBlock}>
          <Link to="/">
            <button className={s.home}>Вернуться назад</button>
          </Link>
          <button className={s.pay}>Оплатить сейчас</button>
        </div>
      </> 
      }
    </div>
  );
};
