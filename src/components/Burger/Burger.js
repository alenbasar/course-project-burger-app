import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  /* let newIngredients = Object.keys(props.ingredient)
    .map((igKey) => {
      return [...Array(props.ingredient[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []); */
  let newIngredients = Object.keys(props.ingredient)
    .map((igKey) => {
      return [...Array(props.ingredient[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  /*   let newIngredients = Object.keys(props.ingredient).reduce(
    (acc, igKey) => [
      ...[
        ...props.ingredient[igKey].map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />;
        }),
      ],
      ...acc,
    ],
    []
  ); */
  if (newIngredients.length === 0) {
    newIngredients = <p>Please start adding ingredients</p>;
  }
  console.log(newIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {newIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
