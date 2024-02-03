import React from 'react';
import Task2 from "./Task2"; 

const TaskListComponent = ({ tasks }) => { 
    return (
        <div className="task-list">
            <h2>Task List</h2>
            {tasks.map((task) => (
                <Task2 key={task.id} task={task} /> {}
            ))}
        </div>
    );
};

export default TaskListComponent;
