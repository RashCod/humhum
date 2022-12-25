import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Sort.module.css";
import { setSortType } from "../../../Redux/slices/filterSlice";

export const Sort = () => {
  const sort = useSelector((state) => state.filter.sort)
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);

  const sorting = [
    {
      name: "популярности",
      sortProperty: "rating",
    },
    {
      name: "по цене",
      sortProperty: "price",
    },
    {
      name: "по алфавиту",
      sortProperty: "title",
    },
  ];

  function popupClick(index) {
    dispatch(setSortType(index));
    setOpen(!open);
  }

  return (
    <div className={s.popupBlock}>
      <h5>
        Сортировака по:
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </h5>
      {open && (
        <div className={s.popup}>
          <ul className={s.pupupUl}>
            {sorting.map((obj) => (
              <li
                onClick={() => popupClick(obj)}
                key={obj}
                className={obj.sortProperty == sort.sortProperty ? [s.active] : ""}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
