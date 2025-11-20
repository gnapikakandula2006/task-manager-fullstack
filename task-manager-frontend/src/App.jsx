import './App.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onTaskCreated={(newTask) => setTasks([...tasks, newTask])} />
      <TaskList />
    </div>
  );
}

export default App;