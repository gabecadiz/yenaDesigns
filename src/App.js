import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="personal-info">
          <span className="name">Yena Oh Test Deploy</span>
          <span className="email"> yena2009@hotmail.com</span>
        </div>

        <div className="hyper-links">
          <span className="work">Work</span>
          <span className="about">About</span>
        </div>
      </header>

      <div className="hero-image">
        <span className="hero-image-header">Welcome to my Portfolio</span>
      </div>
      <div className="hero-thrive">
        <span className="hero-thrive-header">THRIVE</span>
      </div>

      <footer className="footer">
        <div>FOLLOW ME ON LINKED</div>
        <span className="watermark">
          Designed by Yena Oh in 2019. All rights reserved.
        </span>
      </footer>
    </div>
  );
}

export default App;
