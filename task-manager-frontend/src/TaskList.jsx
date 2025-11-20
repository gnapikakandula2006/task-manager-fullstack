import { useEffect, useState } from 'react';
import { getTasks, deleteTask } from './api';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(res => setTasks(res.data));
  }, []);

  const handleDelete = (id) => {
    deleteTask(id).then(() => {
      setTasks(tasks.filter(task => task.id !== id));
    });
  };

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map(task => (
        <div className="task" key={task.id}>
          <strong>{task.title}</strong> - {task.description}
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;