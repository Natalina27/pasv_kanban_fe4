import React from 'react';

export const Board = ({status, tasks}) => {
    return (
        <div>
            Board {status};
            {
               tasks
                   .filter(el => el.status === status)
                   .map( el=>
                   <div>
                      <div> {el.title}</div>
                      <div> prioriry = {el.priority}</div>
                   </div>
               )
            }
            <hr/>
        </div>
    );
};
