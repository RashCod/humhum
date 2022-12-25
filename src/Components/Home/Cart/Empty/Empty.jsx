import React from "react";
import s from "./Empty.module.css";
import basket from "../../../.././img/nobasket.svg";
import { Link } from "react-router-dom";

export const Empty = () => {
  return (
    <div className={s.empty}>
      <h2 className={s.title}>Корзина пустая</h2>
      <p className={s.text}>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <img className={s.img} src={basket} alt="basket" />
      <Link to="/"><button className={s.button}>Вернуться назад</button></Link>
    </div>
  );
};
