import React, {useState} from 'react';
import './App.module.css';
import {FormCreateTask} from "../FormCreateTask";
import {Board} from "../Board";

const initialTasks = [
    {
        id: 1,
        title: 'First Task',
        priority: 2,
        status: 'todo'
    },
    {
        id: 2,
        title: 'Second Task',
        priority: 3,
        status: 'review'
    }
    ];
function App() {
    const [tasks, setTasks] = useState(initialTasks);
  return (
    <div>
      <FormCreateTask />
      <Board />
    </div>
  );
}

export default App;
