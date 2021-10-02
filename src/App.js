import './App.css';
import web3 from './web3';
import React, { useState } from 'react';

// Import all your Contract Interfaces
import contract from './contracts/contract';

function App() {
  if (web3 === undefined) {
    return <h1>Web3 Provider not found. Please install MetaMask</h1>
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Web3 ⚡️</h1>
        </header>
      </div>
    );
  }
}

export default App;
