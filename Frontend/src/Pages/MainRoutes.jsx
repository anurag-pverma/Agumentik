import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from '../Components/Home';
import SignIn from './SignIn';
import SignUp from './SignUp';


const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/home" element={<Home/>} />
        </Routes>
    </div>
  )
}

export default MainRoutes