import React, { Component } from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  // test
  state = {
    ingredients: {
      cheese: 1,
      meat: 1,
      salad: 1,
      bacon: 1,
    },
  };

  compoennetDidMout() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients });
  }
  checkoutCancelled = () => {
    this.props.history.goBack();
  };
  checkoutContinued = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelled}
          checkoutContinued={this.checkoutContinued}
          ingredients={this.state.ingredients}
        />
      </div>
    );
  }
}

export default Checkout;
