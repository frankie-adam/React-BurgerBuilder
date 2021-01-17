import React, {Component}  from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component  {
    state = {
        ingredients: {
            cheese: 1,
            meat: 1,
            salad: 1,
            bacon: 1
        }
    };

    render () {
        return (
            <div>
                <CheckoutSummary ingredient = {this.state.ingredients}/>
            </div>
        )
    }
}

export default Checkout;