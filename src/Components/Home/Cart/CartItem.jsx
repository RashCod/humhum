import React from "react";
import miniPizza from "../../.././img/miniPizza.svg";
import remove from "../../.././img/close.svg";
import s from "./Cart.module.css";
import { deletedPizza} from "../../../Redux/slices/cartSlice";
import { useDispatch } from "react-redux";

export const CartItem = ({ id, title, imageUrl, price, size, type }) => {
  const dispatch = useDispatch()

  function deleted (id) {
    if(window.confirm('Вы действительно хотите удалить пиццу?')){
      dispatch(deletedPizza(id))
    }
  }


  return (
    <div className={s.pizzaBlock}>
      <div className={s.pizza}>
        <img src={imageUrl} alt="pizza" />
        <div className={s.titlePizza}>
          <h3>{title}</h3>
          <p>
            {type}, <span>{size} см.</span>
          </p>
        </div>
      </div>
      <div className={s.countBlock}>
        {/* <div className={s.plusBlock}>
          <b className={s.minus}>-</b>
          <b>{count}</b>
          <b  className={s.plus}>+</b>
        </div> */}
        <b className={s.price}>{price} ₽</b>
        <img onClick={()=>deleted(id)} className={s.remove} src={remove} alt="close" />
      </div>
    </div>
  );
};
