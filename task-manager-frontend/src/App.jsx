import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Fetch tasks from backend
  const loadTasks = () => {
    axios.get("http://localhost:8082/api/tasks")
      .then(res => setTasks(res.data))
      .catch(err => console.error("Error fetching tasks:", err));
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // Add task
  const addTask = (e) => {
    e.preventDefault();

    const newTask = { title, description };

    axios.post("http://localhost:8082/api/tasks", newTask)
      .then(() => {
        setTitle("");
        setDescription("");
        loadTasks();
      })
      .catch(err => console.error("Error adding task:", err));
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial", maxWidth: "600px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Task Manager</h1>

      {/* Add Task Form */}
      <form onSubmit={addTask} style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "30px"
      }}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <button type="submit" style={{
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer"
        }}>
          Add Task
        </button>
      </form>

      {/* Task List */}
      <h2>All Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task) => (
            <li key={task.id} style={{
              background: "#f0f0f0",
              padding: "12px",
              borderRadius: "8px",
              marginBottom: "10px"
            }}>
              <strong>{task.title}</strong>
              <br />
              <span>{task.description}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
