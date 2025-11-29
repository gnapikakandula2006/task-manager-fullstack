import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export const getTasks = () => axios.get(`${BASE_URL}/api/tasks`);
export const createTask = (task) => axios.post(`${BASE_URL}/api/tasks`, task);
export const updateTask = (id, task) => axios.put(`${BASE_URL}/api/tasks/${id}`, task);
export const deleteTask = (id) => axios.delete(`${BASE_URL}/api/tasks/${id}`);