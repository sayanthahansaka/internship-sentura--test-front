import React from 'react';

const WeavyTaskComponent = ({ title, description, dueDate }) => {
    return (
        <div className="task">
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Due:</strong> {dueDate}</p>
        </div>
    );
};

export default WeavyTaskComponent;
