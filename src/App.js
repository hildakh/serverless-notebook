import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src="https://cdn.pixabay.com/photo/2017/04/19/13/07/coffee-2242231_960_720.jpg" alt="notes" className="App-pic"></img>
        <p>
          Hilda's serverless note-taking app
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
