import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from "./Signup.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path='/register' element={<Signup />}></Route>
                <Route path='/login' element={<Login/>}></Route>
              <Route path="/home" element={<Home/>}></Route>
          </Routes>
      </BrowserRouter>


  )
}

export default App
