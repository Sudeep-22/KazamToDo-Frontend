import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Navbar from './pages/Navbar'
import SignUp from './pages/SignUp';
import ToDoList from './pages/ToDoList';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ToDoList/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
