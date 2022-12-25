import React from "react";
import PizzaLogo from "../../img/pizza.svg";
import basket from "../../img/basket.svg";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import { Search } from "./Search/Search";
import { useSelector } from "react-redux";

export const Header = () => {
  const {totalPrice, pizza} = useSelector((state)=> state.cart)

  return (
    <header className={s.header}>
      <Link to="/">
        <div className={s.headerLogo}>
          <img src={PizzaLogo} alt="pizzaLogo" />
          <h1 className={s.headerTitle}>
                 Hum Hum
            <br /> Pizza
          </h1>
        </div>
      </Link>
     <Search/>
      <Link to="/cart">
        <button className={s.button}>
          <span className={s.price}>{totalPrice} ₽</span>
          <div className={s.line}></div>
          <div className={s.basketBlock}>
            <img src={basket} alt="basket" />
            <span className={s.count}>{pizza.length}</span>
          </div>
        </button>
      </Link>
    </header>
  );
};
