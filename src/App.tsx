import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <h1>Starship Todo List</h1>

        <div className="form">
            <input className="input" type="text" placeholder="Add your task" />
            <button className="button">Submit</button>
        </div>

        <ul  className="list">
            <li>Walk the dog</li>
        </ul>
    </div>
  );
}

export default App;
