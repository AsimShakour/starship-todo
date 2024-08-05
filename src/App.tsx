// // @ts-nocheck

import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import './App.css';

import initialTasks from './data'
import TaskList from './TaskList';

export interface Task {
  id: number
  title: string
}

const App = () => {

  const [tasks,setTasks] = useState<Task[]>([]);
  const [newTask,setNewTask] = useState<string>('');

  useEffect(()=> {
    fetchTasks()
  },[])

  const fetchTasks =  () => {
    const response = initialTasks;
    console.log(response)
    setTasks(response)
  }

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTask.trim() }]);
      setNewTask('');
    }
  };

  const deleteTask = useCallback((id: number) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }, []);

  return (
    <div className="App">
        <h1>Starship Todo List</h1>
        <form onSubmit={addTask}>
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add your task"
        />
        <button type="submit">Submit</button>
      </form>
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
