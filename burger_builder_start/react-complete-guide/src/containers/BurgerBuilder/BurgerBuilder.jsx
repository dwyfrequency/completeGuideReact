import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger.jsx";
import BuildControls from "../../components/Burger/BuildControls/BuildControls.jsx";
import Modal from "../../components/UI/Modal/Modal.jsx";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary.jsx";
import axios from "../../axios-orders";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0,
    purchasable: false,
    purchasing: false
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
    const order = {
      ingredients: this.state.ingredients,
      // for a real app, you should calc price on the server so user cannot manipulate it
      price: this.state.totalPrice,
      customer: {
        name: "Max Pain",
        address: {
          street: "23 Test Ave.",
          zipCode: "19009",
          country: "Canada"
        },
        email: "test@me.co"
      },
      deliveryMethod: "fastest"
    };

    // for firebase, you have any nodename of your choice + .json
    axios
      .post("/orders.json", order)
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
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
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice}
          />
        </Modal>
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
  }
}

export default BurgerBuilder;
