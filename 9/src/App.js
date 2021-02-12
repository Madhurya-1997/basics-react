
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  state = {
    title: "Please Sign up",
    btn: "Login",
    loggedIn: false
  }

  handleChange = (event) => {

    let isLoggedIn = this.state.loggedIn;
    if (isLoggedIn === false) {
      this.setState({
        title: "Welcome back",
        btn: "Logout",
        loggedIn: true
      })

    } else {
      this.setState({
        title: "Please Sign up",
        btn: "Login",
        loggedIn: false
      })

    }

  }

  render() {
    return (
      <div className="App" >
        <h1>{this.state.title}</h1>
        <button onClick={this.handleChange}>{this.state.btn}</button>
      </div>
    );
  }

}

export default App;
