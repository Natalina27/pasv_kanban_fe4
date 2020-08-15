import React, { useState } from 'react';
import './App.module.css';
import { FormCreateTask } from "../FormCreateTask";
import { Board } from "../Board";
import { v4 as uuid } from 'uuid';
import { Container, Row } from "reactstrap";

const initialTasks = [
    {
        id: uuid(),
        title: 'First Task',
        priority: 1,
        status: 'Todo'
    },
    {
        id: uuid(),
        title: 'Second Task',
        priority: 2,
        status: 'Todo'
    },
];

const statuses = ['Todo', 'Progress', 'Review', 'Done'];

function App() {

    const [tasks, setTasks] = useState(initialTasks);

    const BoardJSX = statuses.map(el =>
        <Board
            status={el}
            key={el}
            tasks={tasks}
        />);

    return (
        <div>
            <Container>
                <FormCreateTask/>
                <Row>
                    {BoardJSX}
                </Row>
            </Container>
        </div>
    );
}

export default App;
