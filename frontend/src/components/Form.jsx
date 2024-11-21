import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN,REFRESH_TOKEN } from "../constants";

function Form({route,method}){
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpassword,setConfirmpassword] = useState('')
    const [loading,setLoading] = useState(false)

    const name = method==='login'? 'Log In' : 'Sign In';
    const navigate = useNavigate();

    const handleSubmit =async(e)=>{
        
        setLoading(true);
        e.preventDefault();
        try{
            let res = null;
            if(method==='login'){
               res = await api.post(route,{username,password});
               console.log(res.data)
               localStorage.setItem(ACCESS_TOKEN,res.data.access);
               localStorage.setItem(REFRESH_TOKEN,res.data.refresh);
               navigate('/home');
            }
            else{  
                res = await api.post(route,{username,password,email});
                navigate('/login');
            }
            
        }
        catch(error){
            alert(error)
        }
        finally{
            setLoading(false)
        }

    }

    return <div className="w-full max-w-xs">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ml-10" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      </div>

     {method ==='register' && <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>}

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>

      {method ==='register' && <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm password">
          Confirm Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmpassword" type="password" placeholder="Confirm password" value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}/>
      </div>}

      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          {name}
        </button>
      </div>
    </form>

  </div>

}
export default Form;