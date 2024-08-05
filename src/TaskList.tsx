  import React from 'react';
  import { Task } from './App';

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
            <button className="button delete" onClick={() => onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  });

  export default TaskList;