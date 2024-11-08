import React, { useState } from 'react';
import Header from './Header';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Task } from './types';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // State for storing tasks

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(), // Unique ID for each task based on timestamp
      title,
      completed: false, // New tasks are not completed by default
    };
    setTasks([...tasks, newTask]); // Add new task to the state
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
};

export default App;
