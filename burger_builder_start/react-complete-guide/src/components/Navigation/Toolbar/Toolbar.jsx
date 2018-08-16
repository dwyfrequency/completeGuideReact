import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo.jsx";
import NavigationItems from "../NavigationItems/NavigationItems.jsx";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
