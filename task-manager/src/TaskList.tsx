import React, { useState } from 'react';
import { Task } from './types';

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  editTask: (id: number, newTitle: string) => void;
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask, editTask, deleteTask }) => {
  const [editId, setEditId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState<string>('');

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  const handleSave = (id: number) => {
    if (editTitle.trim()) {
      editTask(id, editTitle);
      setEditId(null);
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {editId === task.id ? (
            <>
              <input type="text" value={editTitle} onChange={handleEditChange} />
              <button onClick={() => handleSave(task.id)}>Save</button>
            </>
          ) : (
            <>
              <span
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={() => toggleTask(task.id)}
              >
                {task.title}
              </span>
              <button onClick={() => { setEditId(task.id); setEditTitle(task.title); }}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

