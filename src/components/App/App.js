import React, {useState} from 'react';
import './App.module.css';
import {FormCreateTask} from "../FormCreateTask";
import {Board} from "../Board";
import {v4 as uuid} from 'uuid';

const initialTasks = [
    {
        id: uuid(),
        title: 'First Task',
        priority: 2,
        status: 'todo'
    },
    {
        id: uuid(),
        title: 'Second Task',
        priority: 3,
        status: 'review'
    }
    ];

const statuses = ['todo', 'progress', 'review', 'done'];

function App() {

    const [tasks, setTasks] = useState(initialTasks);

  return (
    <div>
      <FormCreateTask />
        {
            statuses.map(el =>  <Board status={el} key={el}/> )
        }
    </div>
  );
}

export default App;
