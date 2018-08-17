import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar.jsx";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer.jsx";

/* we can't return just adjacent jsx elements. 
we have three options return an array, create a higher order component to wrap it, or wrap it in a div */

const layout = props => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
