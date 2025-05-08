import './App.css'
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom';
import Login from './auth/Login'
import Navbar from './auth/Navbar'
import SignUp from './auth/SignUp';
import ToDoList from './auth/ToDoList';

function App(){
  const isLoggedIn = Boolean(localStorage.getItem('accessToken'));
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={isLoggedIn ? <ToDoList /> : <Navigate to="/login" />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
