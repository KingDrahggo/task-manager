import React, { useState } from 'react';

interface TaskFormProps {
  addTask: (taskTitle: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the page from reloading on form submission
    if (title.trim()) { // Check if the input is not just spaces
      addTask(title);
      setTitle(''); // Clear the input after submitting
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update `title` as the user types
        placeholder="Enter a task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
