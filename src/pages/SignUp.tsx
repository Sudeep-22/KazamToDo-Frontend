import React, {useState} from 'react'

const SignUp = () => {
    const [credential, setCredential] = useState({email: "", password: ""});
    const [tempPassword, setTempPassword] = useState("");
    const [error, setError] = useState("");
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
      setCredential((prev)=>({...prev, [e.target.name]: e.target.value}));
    }
     const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(tempPassword!==credential.password){
            setError("Passwords dont match");
        }
     }  
    return (
      <div className='text-center w-full flex'>
        <div className='m-auto border-0 shadow-xl mt-60'>
          <h1 className=' text-gray-600  text-2xl my-8 font-bold'>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div >
              <div className='flex justify-between items-center mx-5 mb-3'>
                  <label htmlFor="email" className='text-gray-600 mr-5'>Email:</label>
                  <input className="border rounded px-2 py-1 w-60" type="text" name="email" value={credential.email} onChange={(e)=>handleChange(e)}/>
              </div>
              <div className='flex justify-between items-center mx-5 mb-3'>
                  <label htmlFor="password" className='text-gray-600 mr-5'>Password:</label>
                  <input className="border rounded px-2 py-1 w-60" type="password" name="password" value={credential.password} onChange={(e)=>handleChange(e)} />
              </div>
              <div className='flex justify-between items-center mx-5 mb-3'>
                  <label htmlFor="password" className='text-gray-600 mr-5'> Confirm Password:</label>
                  <input className="border rounded px-2 py-1 w-60" type="password" name="password" value={tempPassword} onChange={(e)=>setTempPassword(e.target.value)} />
              </div>
            </div>
              <button type="submit"className=' text-gray-600 my-8 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-400 hover:cursor-pointer hover'> Confirm </button>
              {error.length!==0 && <div>{error}</div>}
          </form>
        </div>
      </div>
    )
}

export default SignUp
