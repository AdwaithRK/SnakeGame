import React, { Component } from 'react';
import './App.css';
import SnakeGrid from './Components/SnakeGrid'
class App extends Component {
  render() {
    return (
      <div className="App">
          <SnakeGrid/>
      </div>
    );
  }
}

export default App;
