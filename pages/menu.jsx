import React from 'react'
import PizzaCard from "../components/PizzaCard";
import axios from "axios";
import styles from "../styles/Menu.module.css";
import { useEffect, useMemo, useState } from "react";


function menu({pizzas}) {
  
  const handleClick = (cat)=>{
    setSelectedCategory(cat)
  };
  const [pizzaList, setPizzaList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  
  function getFilteredList() {
    if (!selectedCategory) {
      return pizzaList;
    }else if (selectedCategory==="all") {
      return pizzaList;
    }
    return pizzaList.filter((item) => item.cat === selectedCategory);
  }
  useEffect(() => {
    setPizzaList(pizzas);
  }, []);

  var filteredList =
   useMemo(getFilteredList, [selectedCategory, pizzaList]);


  return (
  <div className={styles.container}>
    <div className={styles.left}>
    <h1 className={styles.title}>CATEGORIES</h1>
        <div className={styles.cats}>
          <span className={styles.cat} onClick={() => handleClick("all")}>
          All
          </span>
          <span className={styles.cat} onClick={() => handleClick("pizza")}>
          Pizza
          </span>
          <span className={styles.cat} onClick={() => handleClick("pasta")}>
          Pasta
          </span>
        </div>
    </div>
    <div className={styles.right}>
    {filteredList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
    </div>
    </div>
  )
  
}
export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
     pizzas: res.data,
    },
  };
};

export default menu
