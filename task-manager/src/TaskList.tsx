import React from 'react';
import { Task } from './types';

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} onClick={() => toggleTask(task.id)}>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
