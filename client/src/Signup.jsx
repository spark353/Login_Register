import {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
const SignUp = () =>  {
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {fullName, email, password})
            .then(result => {console.log(result)
            navigate('/login')
    })
            .catch(err=> console.log(err))
    }
    return (
        <div className='flex flex-col items-center justify-center w-96 h-screen mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    <span className='text-blue-500'>TalkTime</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input
                            type='text'
                            name='fullName'
                            placeholder='Put your full name'
                            className='w-full input input-bordered h-10'
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text'>Email</span>
                        </label>
                        <input
                            type='email'
                            name='email'
                            placeholder='Put your email'
                            className='w-full input input-bordered h-10'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            name='password'
                            placeholder='Put your password'
                            className='w-full input input-bordered h-10'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to={"/login"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
                          href='#'>
                        Already have an account?
                    </Link>
                    <div>
                        <button className='btn btn-block btn-sm mt-2 border bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
                            SignUp
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUp;