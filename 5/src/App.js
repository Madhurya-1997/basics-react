import './App.css';
import React, { Component } from 'react';

class App extends Component {

  state = {
    entryCount: 0,
    exitCount: 0,
    diff: 0
  }

  updateEntry = (prevEntryCount, prevExitCount, prevDiff) => {
    this.setState({
      entryCount: prevEntryCount + 1,
      exitCount: 0,
      diff: prevDiff + 1
    })
  }

  updateExit = (prevEntryCount, prevExitCount, prevDiff) => {

    if (prevEntryCount > prevExitCount) {
      this.setState({
        entryCount: prevEntryCount,
        exitCount: prevExitCount + 1,
        diff: prevDiff - 1
      })
    }

  }

  render() {
    return (
      <div className="App" >
        <div className="login">
          <button
            className="Button"
            onClick={this.updateEntry.bind(this, this.state.entryCount, this.state.exitCount, this.state.diff)}>
            Login </button>
          <span> {this.state.entryCount} people are logged in</span>
        </div>

        <div class="exit">
          <button className="Button" onClick={this.updateExit.bind(this, this.state.entryCount, this.state.exitCount, this.state.diff)}>
            Exit </button>
          <span> {this.state.exitCount} people exited</span>
        </div>
        <h3>People inside: {this.state.diff}</h3>
      </div>
    );
  }

}

export default App;
