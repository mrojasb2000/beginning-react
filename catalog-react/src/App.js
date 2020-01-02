import React, { Component } from 'react';
import Catalog from './components/Catalog';
import './App.css';

class App extends Component {
  render() {
    return ( 
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">The Catalog App</h1>
        <Catalog />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

export default App;
