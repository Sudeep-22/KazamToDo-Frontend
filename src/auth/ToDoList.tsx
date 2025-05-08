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
      <div className='mt-15 flex w-full justify-center' >
        <div>
          <h2 className='text-2xl'>Todos</h2>
        </div>
        <div>
          <input className="border rounded px-2 py-1 w-60" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New todo" />
          <button onClick={addTodo} className=' text-gray-600 my-8 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-400 hover:cursor-pointer'>Add</button>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo._id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoPage;
