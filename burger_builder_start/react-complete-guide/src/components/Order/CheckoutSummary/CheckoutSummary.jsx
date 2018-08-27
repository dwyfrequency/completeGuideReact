import React from "react";
import Burger from "../../Burger/Burger.jsx";
import Button from "../../UI/Button/Button.jsx";
import classes from "./CheckoutSummary.css";

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes delicious!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked>
        Cancel
      </Button>
      <Button btnType="Success" clicked>
        Continue
      </Button>
    </div>
  );
};

export default checkoutSummary;
