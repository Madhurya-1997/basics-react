import React, { Component } from 'react';

class ButtonEvents extends Component {

    state = {
        counter: 5
    }

    handleIncrementChange = () => {
        let counter = this.state.counter;
        this.setState({ counter: counter + 1 })
        alert("Hello there")
    }

    handleDecrementChange = () => {
        let counter = this.state.counter;
        this.setState({ counter: counter - 1 })
    }

    handleWelcome = () => {
        alert("Welcome")
    }

    handleClick = () => {
        alert("I was clicked")
    }

    render() {
        return (
            <div>
                <h2>{this.state.counter}</h2>
                <button onClick={this.handleIncrementChange}>Increment</button>
                <button onClick={this.handleDecrementChange}>Decrement</button>
                <button onClick={this.handleWelcome}>Say Welcome</button>
                <button onClick={this.handleClick}> Click on me</button>
            </div>

        );
    }
}

export default ButtonEvents;