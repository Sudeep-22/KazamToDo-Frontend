import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div className='text-center w-full flex'>
      <div className='w-60 m-auto border'>
        <h1 className=' text-gray-600 dark:text-gray-600 text-2xl'>Login</h1>
        <form>
            <div className='flex justify-between'>
                <label htmlFor="email" className='dark:text-gray-600 text-gray-600'>Email</label>
                <input type="text" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="rounded-xl"/>
            </div>
            <div>
                <label htmlFor="password" className='dark:text-gray-600 text-gray-600'>Password</label>
                <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="rounded-xl" />
            </div>
            <button type="submit" className='dark:text-gray-600 text-gray-600'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login
