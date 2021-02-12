import logo from './logo.svg';
import './App.css';
import picture from './assets/picture.jpg';
import { Component } from 'react';

class App extends Component {

  state = {
    name: "DBS",
    rent: 900000,
    address: "Chennai"
  }
  render() {
    let rent = this.state.rent;
    let isAffordable;

    if (rent <= 60000) {
      isAffordable = <h5 style={{ color: "red" }}>Rent: {rent}</h5>
    } else {
      isAffordable = <h5 style={{ color: "green" }}>Rent: {this.state.rent}</h5>;
    }

    return (
      <div className="App">
        <h1>Office Space, at Affordable price</h1>
        <img src={picture} alt="Office image" width="25%" height="25%" />
        <h3>Name: {this.state.name} </h3>
        {isAffordable}
        <h5 style={{ color: "teal" }}>Address: {this.state.address}</h5>
      </div>
    );
  }

}

export default App;
