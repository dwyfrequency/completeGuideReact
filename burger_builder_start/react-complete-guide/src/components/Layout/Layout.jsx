import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar.jsx";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer.jsx";

/* we can't return just adjacent jsx elements. 
we have three options return an array, create a higher order component to wrap it, or wrap it in a div */

class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  SideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
