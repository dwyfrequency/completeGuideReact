import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary.jsx";
/*NOTE - you only need to install react-router-dom, react-router will be install as a dependency with react-router-dom*/

class Checkout extends Component {
  state = {
    // we will eventually remove the hard coding
    ingredients: {
      salad: 1,
      cheese: 1,
      meat: 1,
      bacon: 0
    }
  };

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {};

  render() {
    // cancel btn, continue btn, show summary, load contact form
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default Checkout;
