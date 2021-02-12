import React, { Component } from 'react';

class CurrencyConverter extends Component {

    state = {
        amount: "1"
    }
    handleAmountChange = (event) => {
        this.setState({ amount: event.target.value })
    }

    handleConvert = (event) => {
        let finalAmount = this.state.amount * 80;
        alert("Euro amount is: " + finalAmount);
    }
    render() {
        return (
            <div>
                <label htmlFor="amount">Amount: </label>
                <input id="amount" onChange={this.handleAmountChange} value={this.state.amount} />
                <button onClick={this.handleConvert}>Convert to Euro Amount</button>
            </div>

        );
    }
}

export default CurrencyConverter;