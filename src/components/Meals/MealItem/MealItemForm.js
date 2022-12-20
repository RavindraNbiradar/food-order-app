import React, { useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  console.log(props,'-props')
  const cartcntxt = useContext(CartContext);
  console.log("reintialized cartcntx", cartcntxt);
  const addItemToCart = (event) => {
    event.preventDefault();
    const quantity = document.getElementById("amount").value;
    console.log(quantity, "..........................................//////////////////")
    console.log(quantity, "----quantity-meal");
    cartcntxt.addItem({ ...props.item, quantity: quantity });

    console.log("after addItemToCart", cartcntxt);
  };
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",

        }}
      />
      <button onClick={addItemToCart}>+Add</button>
    </form>
  );
};

export default MealItemForm;
