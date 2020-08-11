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
        status: 'Todo'
    },
    {
        id: uuid(),
        title: 'Second Task',
        priority: 3,
        status: 'Review'
    }
    ];

const statuses = ['Todo', 'Progress', 'Review', 'Done'];

function App() {

    const [tasks, setTasks] = useState(initialTasks);

  return (
    <div>
      <FormCreateTask />
      <hr/>
        {
            statuses.map(el =>
                <Board
                    status={el}
                    key={el}
                    tasks={tasks}
                /> )
        }
    </div>
  );
}

export default App;
