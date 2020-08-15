import React from 'react';
import {Button, Card, CardBody} from "reactstrap";

export const Task = ({task}) => {
    return (
        <Card>
            <CardBody>
                {task.title}{task.priority}
            </CardBody>
            <CardBody>
                <Button>Button</Button>
            </CardBody>
        </Card>
    );
};


