import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

  return (
    <div className='max-w-full bg-gray-300 flex justify-between px-10'>
        <div>Company Name</div>
        <div>
            <button className='bg-gray-600 text-white mr-3 border rounded shadow'> Dark Mode</button>
            {location.pathname=="/login" && (<button className='mr-3 border rounded shadow' onClick={()=>navigate("/signUp")}> Sign Up</button>)}
            {location.pathname=="/signUp" && (<button className='mr-3 border rounded shadow' onClick={()=>navigate("/login")}> Back </button>)}
            {location.pathname=="/" && (<button className='mr-3 border rounded shadow' onClick={()=>navigate("/login")}> Logout </button>)}
        </div>
      
    </div>
  )
}

export default Navbar
