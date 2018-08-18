import React from "react";
import Logo from "../../../Logo/Logo.jsx";
import classes from "./DrawerToggle.css";

const drawerToggle = props => (
  <div onClick={props.clicked} className={classes.Logo}>
    <Logo />
  </div>
);

export default drawerToggle;
