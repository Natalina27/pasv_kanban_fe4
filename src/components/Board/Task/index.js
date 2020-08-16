import React from 'react';
import {Button, Card, CardBody, Alert} from 'reactstrap';

import s from './styles.module.css';

export const Task = ({task, changeTaskPosition}) => {

    const alertColor = ['primary', 'success', 'warning', 'danger'];

    return (
        <Card>
            <CardBody className={s.buttons}>
                <Alert color={alertColor[task.priority]} className={s.task}>
                {task.title}{task.priority}
                <div className={s.buttons}>
                    {task.priority !== 3 &&
                        <Button size='sm' onClick={()=>changeTaskPosition(task.id, 'up')}>
                        ↑
                        </Button>
                    }
                    { task.priority !== 0 &&
                        <Button size='sm' onClick={()=>changeTaskPosition(task.id, 'down')}>
                        ↓
                    </Button>
                        }
                </div>
                </Alert>
            </CardBody>
            <CardBody className={s.buttons}>
                { task.status !== 'Todo' &&
                <Button onClick={()=> changeTaskPosition(task.id, 'left')}>
                    ←
                </Button>}
                { task.status !== 'Done' &&
                <Button onClick={()=> changeTaskPosition(task.id, 'right')}>
                    →
                </Button>}
            </CardBody>
        </Card>
    );
};


