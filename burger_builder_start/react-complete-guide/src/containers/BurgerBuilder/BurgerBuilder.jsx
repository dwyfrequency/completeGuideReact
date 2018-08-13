import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger.jsx";
import BuildControls from "../../components/Burger/BuildControls/BuildControls.jsx";

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
    totalPrice: 4
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
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredients
    };

    updateIngredients[type] = updatedCount;
    const priceReduction = INGREDIENT_PRICES[type];
    const oldTotalCost = this.state.totalPrice;
    const newTotalCost = oldTotalCost - priceReduction;
    this.setState({ totalPrice: newTotalCost, ingredients: updateIngredients });
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
