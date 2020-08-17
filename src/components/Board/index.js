import React from 'react';
import { Task } from './Task';
import { get } from 'lodash';
import  { Col, Card, CardBody } from 'reactstrap';

import s from './styles.module.css';


export const Board = ({status, tasks, changeTaskPosition}) => {
    tasks = get([], 'tasks', tasks);
    console.log('tasks', tasks);

    const tasksJSX = tasks
        .filter(el => el.status === status)
        .sort((a,b) => b.priority - a.priority)
        .map(el => <Task
            key={el.id}
            task={el}
            changeTaskPosition={changeTaskPosition}
        />);
    return (
        <div className={s.boards}>
            <Col className={s.col}>
                <span className={s.boardTitle}>{ status }</span>
                <Card>
                    <CardBody className={s.cardBody}>
                        { tasksJSX }
                    </CardBody>
                </Card>
            </Col>
        </div>
    );
};
