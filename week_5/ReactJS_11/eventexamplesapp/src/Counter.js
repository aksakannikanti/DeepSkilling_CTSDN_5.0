import React, { Component } from "react";

class Counter extends Component {

    constructor() {
        super();

        this.state = {
            count: 5
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    sayHello = () => {
        alert("Hello! Member1");
    }

    incrementCounter = () => {
        this.increment();
        this.sayHello();
    }

    sayWelcome = (msg) => {
        alert(msg);
    }

    handleClick = () => {
        alert("I was clicked");
    }

    render() {

        return (

            <div>

                <h2>{this.state.count}</h2>

                <button onClick={this.incrementCounter}>
                    Increment
                </button>

                <br />

                <button onClick={this.decrement}>
                    Decrement
                </button>

                <br />

                <button onClick={() => this.sayWelcome("Welcome")}>
                    Say welcome
                </button>

                <br />

                <button onClick={this.handleClick}>
                    Click on me
                </button>

            </div>

        );
    }
}

export default Counter;