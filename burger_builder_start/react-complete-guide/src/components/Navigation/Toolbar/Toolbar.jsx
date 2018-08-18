import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo.jsx";
import NavigationItems from "../NavigationItems/NavigationItems.jsx";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle.jsx";

/*to make the logo scale dynamically, we can do it in two ways:
1. Add a prop to set it, then we'd do an inline style and assign an object
2. We can wrap our logo in the toolbar and sidedrawer with a div and assign some css styles to it */

const toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
