import React from "react";
import Logo from "../../Logo/Logo.jsx";
import NavigationItems from "../NavigationItems/NavigationItems.jsx";
import classes from "./SideDrawer.css";

const sideDrawer = props => {
  return (
    <div className={classes.SideDrawer}>
      {/* we can use the logo class b/c css modules will convert our classes into scoped names. 
      They will be converted to separate classes so they dont interfere  */}
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
