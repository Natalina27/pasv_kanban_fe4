import React, {useState} from 'react';
import './App.module.css';
import {FormCreateTask} from "../FormCreateTask";
import {Board} from "../Board";
import {v4 as uuid} from 'uuid';
import {Container, Row} from "reactstrap";

const initialTasks = [
    {
        id: uuid(),
        title: 'First Task',
        priority: 0,
        status: 'Todo'
    },
    {
        id: uuid(),
        title: 'Second Task',
        priority: 1,
        status: 'Todo'
    },
    {
        id: uuid(),
        title: 'Third Task',
        priority: 2,
        status: 'Todo'
    },
    {
        id: uuid(),
        title: 'Fourth Task',
        priority: 3,
        status: 'Todo'
    },
];

const statuses = ['Todo', 'In Progress', 'Review', 'Done'];
const taskPriority = [0, 1, 2, 3];

export function App() {

    const [tasks, setTasks] = useState(initialTasks);
    const [isModalOpen, setModelOpen] = useState(false);
    const [newTitle, setNewTitle] = useState('');

    const addNewTask = (newTitle) => {
        const newTask = {
            id: uuid(),
            title: newTitle,
            priority: 0,
            status: 'Todo'
        }
        const newList = [...tasks, newTask];
        setTasks(newList);
        setModelOpen(false);
        setNewTitle('');
    }

    const openModal = ()=>setModelOpen(true);

    const changeTitle= (e)=>setNewTitle(e.target.value);

    const changeTaskPosition = (taskId, direction) => {
        const newTask = tasks.map(el => {
            if (el.id === taskId) {
                if (direction === 'right') {
                    el.status = statuses[statuses.indexOf(el.status) + 1]
                } else if (direction === 'left') {
                    el.status = statuses[statuses.indexOf(el.status) - 1]
                } else if (direction === 'up') {
                    el.priority = taskPriority[taskPriority.indexOf(el.priority) + 1]
                } else if (direction === 'down') {
                    el.priority = taskPriority[taskPriority.indexOf(el.priority) - 1]
                }
            }
            return el;
        })
        setTasks(newTask);
    }


    const BoardJSX = statuses.map(el =>
        <Board
            status={el}
            key={el}
            tasks={tasks}
            changeTaskPosition={changeTaskPosition}
        />);

    return (
        <div>
            <Container>
                <FormCreateTask
                    addNewTask={addNewTask}
                    newTitle={newTitle}
                    openModal={openModal}
                    isModalOpen={isModalOpen}
                    changeTitle={changeTitle}
                    />
                <Row>
                    {BoardJSX}
                </Row>
            </Container>
        </div>
    );
}
