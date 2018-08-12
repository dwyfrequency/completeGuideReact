import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients.jsx";
import classes from "./Burger.css";

const burger = props => {
  /* get an array of all of the ingredient keys, map over the array creating an array  of the length of the specific ingredient;
  take the resulting array and spread it into a new array (necessary for odd reasons) {
    console.log(Array(2))
    VM901:1 (2) [empty × 2]length: 2__proto__: Array(0)
    undefined
    console.log([...Array(2)])
    VM920:1 (2) [undefined, undefined]
  }  
  then we map again and create an array of BurgerIngredients - key will be something like salad1 so it will be unique
  actual ingredient is taken from the closure */
  const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, idx) => {
      return <BurgerIngredient key={igKey + idx} type={igKey} />;
    });
  });
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
