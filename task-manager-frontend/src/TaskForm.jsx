import { useState } from 'react';
import { createTask } from './api';

function TaskForm({ onTaskCreated }) {
  const [task, setTask] = useState({ title: '', description: '', completed: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task).then(res => {
      onTaskCreated(res.data);
      setTask({ title: '', description: '', completed: false });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={task.title} onChange={e => setTask({ ...task, title: e.target.value })} placeholder="Title" />
      <input value={task.description} onChange={e => setTask({ ...task, description: e.target.value })} placeholder="Description" />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;