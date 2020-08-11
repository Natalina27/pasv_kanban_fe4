import React from 'react';

export const Task = ({task}) => {
    return (
        <div>
            <div> {task.title}</div>
            <div> {task.priority}</div>
        </div>
    );
};


