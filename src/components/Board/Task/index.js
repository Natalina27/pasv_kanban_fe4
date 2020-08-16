import React from 'react';
import {Button, Card, CardBody, Alert} from 'reactstrap';

import s from './styles.module.css';

export const Task = ({task, changeTaskStatus}) => {

    const alertColor = ['primary', 'success', 'warning', 'danger'];
    return (
        <Card>
            <CardBody>
                <Alert color={alertColor[task.priority]}>
                {task.title}{task.priority}
                    <Button size='sm'>↑</Button>
                    <Button size='sm'>↓</Button>
                </Alert>
            </CardBody>
            <CardBody className={s.buttons}>
                { task.status !== 'Todo' &&
                <Button onClick={()=> changeTaskStatus(task.id, 'left')}>
                    ←
                </Button>}
                { task.status !== 'Done' &&
                <Button onClick={()=> changeTaskStatus(task.id, 'right')}>
                    →
                </Button>}
            </CardBody>
        </Card>
    );
};


