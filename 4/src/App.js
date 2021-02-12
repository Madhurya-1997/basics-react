
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  state = {
    cart: [
      { itemname: "Laptop", price: 90000 },
      { itemname: "TV", price: 60000 },
      { itemname: "Washing Machine", price: 70000 },
      { itemname: "Mobile", price: 12000 },
      { itemname: "Fridge", price: 100000 }
    ]
  }

  render() {
    return (
      <div className="Table">
        <table border="1">
          <tr>
            <th className="Th">Name</th>
            <th className="Th">Price</th>
          </tr>

          {this.state.cart.map((item) => {
            return (
              <tr>
                <td className="Td">{item.itemname}</td>
                <td className="Td">{item.price}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }

}

export default App;
