import {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('/home')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='flex flex-col items-center justify-center w-96 h-screen mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg '>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    <span className='text-blue-500'>TalkTime</span>
                </h1>
                <form onSubmit={handleSubmit} className="space-y-2">
                    <div>
                        <label htmlFor="email" className="block text-gray-700 ml-1 pb-1 pt-2">Email</label>
                        <input type='text' placeholder='Enter email' className='w-full input input-bordered h-10'
                               name='email'
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 ml-1 pb-1 pt-2">Password</label>
                        <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'
                               name='password'
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="mt-4 text-sm text-gray-500 ml-1">
                        Dont have an account? <Link to="/register" className="text-blue-600 hover:underline ">Sign up
                        here</Link>
                    </div>
                    <div>
                        <button
                            className='btn btn-block btn-sm mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Login