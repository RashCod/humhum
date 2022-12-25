import React from "react";
import s from "./PizzaBlock.module.css";
import { Sort } from "./Sort/Sort";
import { addPizza } from "../../../Redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";


export const PizzaBlock = ({count, id,title, imageUrl, price ,types,sizes}) => {
  const dispatch = useDispatch()
  const {pizza,totalPrice} = useSelector((state) => state.cart)
  const [type,setType] = React.useState(0)
    const [size,setSize] = React.useState(0)
    const typeArr = ['тонкое','традиционное']

  const addPizzaFunction = () => {
    const pizza = {
      id,
      title,
      imageUrl,
      price,
      size:sizes[size],
      type: typeArr[type] ,
      count,
    }
    dispatch(addPizza(pizza))
  }

  return (
    <div className={s.pizzaBlock}>
      <div className={s.pizzaItem}>
        <img className={s.pizzaImg} src={imageUrl} alt="pizza" />
        <h4>{title}</h4>
        <div className={s.typeBlock}>
      <div className={s.type}>
        {
            types.map((_,index) => <span key={index} onClick={()=>setType(index)} className={type == index? [s.active] : ''}>{typeArr[index]}</span>)
        }
      </div>
      <div className={s.size}>
       {
        sizes.map((obj, index) => <b key={index} className={index === size ? [s.active] : ''} onClick={()=> setSize(index)}>{obj} см.</b>)
       }
      </div>
    </div>
        <div className={s.priceBlock}>
          <h3 className={s.price}>от {price} ₽</h3>
          <button onClick={()=>dispatch(addPizzaFunction)} className={s.button}>
            <span className={s.plus}>+</span> Добавить
            {/* <span className={s.count}>2</span> */}
          </button>
        </div>
      </div>
    </div>
  );
};
