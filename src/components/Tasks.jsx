import React from 'react';

import Task from './Task';


const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
    return (
       <>
            {tasks.map((task) => ( ////para cada task, será renderizado uma Task
                <Task 
                    task={task} 
                    handleTaskClick={handleTaskClick} 
                    handleTaskDeletion={handleTaskDeletion}
                    />
            ))}
       </> 
    );
};

export default Tasks; 