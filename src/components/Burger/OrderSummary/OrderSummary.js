import React from "react";
import Aux from "../../../hoc/Aux.js";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}:</span>{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul style={{ listStyle: "none" }}>{ingredientSummary}</ul>
      <h3>
        Total: <strong>${props.totalPrice.toFixed(2)}</strong>
      </h3>
      <p>Continue to checkout?</p>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        Continue
      </Button>
      <Button btnType="Danger" clicked={props.purchaseCancel}>
        Cancel
      </Button>
    </Aux>
  );
};

export default orderSummary;
