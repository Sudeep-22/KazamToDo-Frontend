import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import type { Todo } from '../types/types';

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');

  const fetchTodos = async () => {
    try {
      const res = await axiosInstance.get('/todos');
      setTodos(res.data);
    } catch (err) {
      alert('Failed to fetch todos');
    }
  };

  const addTodo = async () => {
    try {
      const res = await axiosInstance.post('/todos', { title });
      setTodos((prev) => [...prev, res.data]);
      setTitle('');
    } catch {
      alert('Add failed');
    }
  };

  const logout = async () => {
    await axiosInstance.post('/auth/logout');
    localStorage.removeItem('accessToken');
    window.location.href = '/login';
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Todos</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New todo" />
      <button onClick={addTodo}>Add</button>
      <button onClick={logout}>Logout</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
