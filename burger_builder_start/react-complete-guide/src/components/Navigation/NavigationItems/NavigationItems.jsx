import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem.jsx";

const navagationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem />
  </ul>
);

export default navagationItems;
