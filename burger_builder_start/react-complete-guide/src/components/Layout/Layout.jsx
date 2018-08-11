import React from "react";
import Aux from "../../hoc/Aux";

/* we can't return just adjacent jsx elements. 
we have three options return an array, create a higher order component to wrap it, or wrap it in a div */

const layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
