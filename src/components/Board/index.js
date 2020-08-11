import React from 'react';
import {Task} from "./Task";
import {get} from "lodash";

export const Board = ({status, tasks}) => {
    tasks = get( [],'tasks', tasks);
    return (
        <div>
            Board {status};
            {
               tasks
                   .filter(el => el.status === status)
                   .map( el=> <Task key={el.id} task={el}/>)
            }
            <hr/>
        </div>
    );
};
