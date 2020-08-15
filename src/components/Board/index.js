import React from 'react';
import { Task } from './Task';
import { get } from 'lodash';
import  { Col, Card, CardBody } from 'reactstrap';

import s from './styles.module.css';


export const Board = ({status, tasks}) => {
    tasks = get([], 'tasks', tasks);
    const tasksJSX = tasks
        .filter(el => el.status === status)
        .map(el => <Task key={el.id} task={el}/>);
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
