package com.example.demo.service;

import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository repo;

    public List<Task> getAllTasks() {
        return repo.findAll();
    }

    public Task saveTask(Task task) {
        return repo.save(task);
    }

    public Task updateTask(Long id, Task updatedTask) {
        Task existing = repo.findById(id)
            .orElseThrow(() -> new RuntimeException("Task not found with id " + id));
        existing.setTitle(updatedTask.getTitle());
        existing.setDescription(updatedTask.getDescription());
        existing.setCompleted(updatedTask.isCompleted());
        return repo.save(existing);
    }

    public void deleteTask(Long id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException("Task not found with id " + id);
        }
        repo.deleteById(id);
    }
}