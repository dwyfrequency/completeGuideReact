import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger.jsx";
import BuildControls from "../../components/Burger/BuildControls/BuildControls.jsx";
import Modal from "../../components/UI/Modal/Modal.jsx";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary.jsx";
import Spinner from "../../components/UI/Spinner/Spinner.jsx";
import withErrorHandler from "../../hoc/WithErrorHandler/withErrorHandler.jsx";
import axios from "../../axios-orders";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients
    };

    updateIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldTotalCost = this.state.totalPrice;
    const newTotalCost = oldTotalCost + priceAddition;
    this.setState({ totalPrice: newTotalCost, ingredients: updateIngredients });
    this.updatePurchaseState(updateIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  componentDidMount = () => {
    console.log(this.props);
    // cdm - invoked after the initial rendering
    axios
      .get("https://react-my-burger-jd.firebaseio.com/ingredients.json")
      .then(resp => this.setState({ ingredients: resp.data }))
      .catch(err => this.setState({ error: true }));
  };

  updatePurchaseState = ingredients => {
    // we have to pass in ingredients b/c when we tried to access state before directly, we were receiving old state
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0);
    this.setState({ purchasable: sum > 0 });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    // this.setState({ loading: true });
    // const order = {
    //   ingredients: this.state.ingredients,
    //   // for a real app, you should calc price on the server so user cannot manipulate it
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Max Pain",
    //     address: {
    //       street: "23 Test Ave.",
    //       zipCode: "19009",
    //       country: "Canada"
    //     },
    //     email: "test@me.co"
    //   },
    //   deliveryMethod: "fastest"
    // };
    // // added setTimeout so we could see the spinner longer - firebase so dang fast
    // setTimeout(() => {
    //   // for firebase, you have any nodename of your choice + .json
    //   axios
    //     .post("/orders", order)
    //     .then(resp =>
    //       this.setState({
    //         loading: false,
    //         purchasing: false
    //       })
    //     )
    //     .catch(err => {
    //       this.setState({
    //         loading: false,
    //         purchasing: false
    //       });
    //       console.log(err);
    //     });
    // }, 2000);
    this.props.history.push("/checkout");
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return; // so we dont get negative vals
    }
    const updatedCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredients
    };

    updateIngredients[type] = updatedCount;
    const priceReduction = INGREDIENT_PRICES[type];
    const oldTotalCost = this.state.totalPrice;
    const newTotalCost = oldTotalCost - priceReduction;
    this.setState({ totalPrice: newTotalCost, ingredients: updateIngredients });
    this.updatePurchaseState(updateIngredients);
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };

    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    // we either show the spinner or the order summary
    let orderSummary = null;
    let burger = this.state.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            price={this.state.totalPrice}
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disableInfo}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.state.totalPrice}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

// by wrapping our burger builder in this function, we catch any errors in a higher order component
export default withErrorHandler(BurgerBuilder, axios);
