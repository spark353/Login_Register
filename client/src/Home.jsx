import React, {useEffect} from 'react'
import axios from "axios";

function Home(){
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:3001/home')
            .then(result => {
                console.log(result)
                if (result.data !== "Success") {
                    navigate('/login')
                }
            })
            .catch(err => console.log(err))
    }, []);
    return(
        <div className='flex flex-col items-center justify-center w-96 h-screen mx-auto'>
    <h1 className='text-3xl font-semibold text-center text-gray-300'>Success complete</h1>
        </div>
    )
}
export default Home;