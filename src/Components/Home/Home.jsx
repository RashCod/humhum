import React from "react";
import { PizzaBlock } from "./PizzaBlock/PizzaBlock";
import s from "./Home.module.css";
import { Categories } from "../Categories/Categories";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import Skeleton from "./PizzaBlock/Skeleton";
// import { addPizza } from "../../Redux/slices/cartSlice";


export const Home = () => {
  const [item, setItem] = React.useState([]);
  const searchValue = useSelector((state) => state.filter.searchValue);
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sort = useSelector((state) => state.filter.sort.sortProperty);
  const [loading, setLoading] = React.useState(false);

  const search = searchValue ? `search=${searchValue}` : "";
  const category = categoryId ? `category=${categoryId}` : "";

  const fetchPizza = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://6383e2be4ce192ac604c6e5a.mockapi.io/items?${search}&${category}&sortBy=${sort}&order=asc`
    );
    setItem(response.data);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchPizza();
  }, [search, category, sort]);

  const pizza = item.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeleton = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <Categories />
      <div className={s.home}>{loading ? skeleton : pizza}</div>
    </>
  );
};
