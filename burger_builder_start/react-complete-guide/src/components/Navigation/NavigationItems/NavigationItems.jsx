import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem.jsx";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    {/* for boolean props like active, we can just pass active and it will resolve to true */}
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/orders">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
