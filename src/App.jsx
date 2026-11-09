import React from 'react';
import RandomNumberGenerator from './components/RandomNumberGenerator';
import './App.css';

function App() {
  return (
    <main className="app-container">
      <RandomNumberGenerator />
      <footer className="app-footer">
        React State &amp; Conditional Rendering Demo
      </footer>
    </main>
  );
}

export default App;

