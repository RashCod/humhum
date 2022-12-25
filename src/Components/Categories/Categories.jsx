import React from "react";
import s from "./Categories.module.css";
import { Sort } from "./Sort/Sort";
import { useSelector,useDispatch } from "react-redux";
import { setCategoryId } from "../../Redux/slices/filterSlice";


export const Categories = () => {
  const categoryId = useSelector((state) => state.filter.categoryId)
  const dispatch = useDispatch()
  const categoryArr = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];


  return (
    <div className={s.categoryBlock}>
      <nav className={s.categoryNav}>
        <ul className={s.categoryUl}>
          {categoryArr.map((category, index) => (
            <li
              className={index == categoryId ? [s.active] : ""}
              onClick={()=>dispatch(setCategoryId(index))}
              key={index}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>
      <Sort />
    </div>
  );
};
