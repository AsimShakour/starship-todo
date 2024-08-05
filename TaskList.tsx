import React from 'react';
import { Task } from './types';

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = React.memo(({ tasks, onDelete }) => {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.title}</span>
          <button className="button" onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
});

export default TaskList;