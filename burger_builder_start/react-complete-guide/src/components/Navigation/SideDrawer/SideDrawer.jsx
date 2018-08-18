import React from "react";
import Logo from "../../Logo/Logo.jsx";
import NavigationItems from "../NavigationItems/NavigationItems.jsx";
import classes from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop.jsx";
import Aux from "../../../hoc/Aux/Aux";

const sideDrawer = props => {
  // adding logic to move in or out the sidedrawer
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        {/* we can use the logo class b/c css modules will convert our classes into scoped names. 
      They will be converted to separate classes so they dont interfere  */}
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
