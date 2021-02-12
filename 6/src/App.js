
import { Component } from 'react';
import './App.css';
import ListOfPlayers from './components/ListOfPlayers';
import ScoreLessThan70 from './components/ScoreLessThan70';
import OddPlayers from './components/OddPlayers';
import EvenPlayers from './components/EvenPlayers';
import IndianPlayers from './components/IndianPlayers';


const flag = false;

class App extends Component {

  render() {

    if (flag) {
      return (
        <div className="App" >
          <h1> List of Players</h1>
          <ListOfPlayers />
          <hr></hr>

          <h1> List of Players having score less than 70</h1>
          <ScoreLessThan70 />
        </div>
      );
    } else {
      return (
        <div className="App" >
          <h1> Odd Players</h1>
          <OddPlayers />
          <hr></hr>

          <h1> Even Players</h1>
          <EvenPlayers />
          <hr></hr>

          <h1> List of Indian Players merged </h1>
          <IndianPlayers />
        </div>
      );
    }

  }

}

export default App;
