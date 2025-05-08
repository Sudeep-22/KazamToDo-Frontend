import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

const Login:React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post('/auth/login', { email, password });
      localStorage.setItem('accessToken', res.data.accessToken);
      navigate('/');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className='text-center w-full flex'>
      <div className='m-auto border-0 shadow-xl mt-60'>
        <h1 className=' text-gray-600  text-2xl my-8 font-bold'>Login</h1>
        <form onSubmit={handleLogin}>
          <div >
            <div className='flex justify-between items-center mx-5 mb-3'>
                <label htmlFor="email" className='text-gray-600 mr-5'>Email:</label>
                <input className="border rounded px-2 py-1 w-60" type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='flex justify-between items-center mx-5 mb-3'>
                <label htmlFor="password" className='text-gray-600 mr-5'>Password:</label>
                <input className="border rounded px-2 py-1 w-60" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
          </div>
            <button type="submit" className=' text-gray-600 my-8 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-400 hover:cursor-pointer hover'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login
