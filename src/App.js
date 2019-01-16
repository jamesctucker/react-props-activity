import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import EnterNumber from './components/EnterNumber.js';
import History from './components/History.js'

class App extends Component {

  constructor() {
    super();
    this.state = {
      totalNumber: [],
    }
  }

addTotalNumberToHistory = (totalNumber) => {
  console.log('In app.js addTotalNumberToHistory()', totalNumber);
  this.setState({
    totalNumber: [...this.state.totalNumber, totalNumber],
  });
}
  render() {
    return (
      <div className="App">
        <Header />
        <EnterNumber addTotalNumberToHistory={this.addTotalNumberToHistory} />
        <History totalNumber={this.state.totalNumber} />
      </div>
    );
  }
}

export default App;
