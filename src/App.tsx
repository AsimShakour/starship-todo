import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

const App = () => {
  return (
    <div className="App">
       <div>
            <h1>Starship Todo List</h1>
            <div className="form">
                <input className="input" type="text" placeholder="Add your task" />
                <button className="button">Submit</button>
          </div>
         <TodoList />
        </div>
    </div>
  );
}

export default App;
