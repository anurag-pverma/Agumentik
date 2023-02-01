import React from 'react';
import {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import { signin } from '../Redux/AuthReducer/action';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    const navigate = useNavigate()
    // const message = useSelector(state=>state.Message)
    const dispatch = useDispatch();
    const [formState,setFormState] = useState({
        "email":"",
        "password":""
    })
    const handleChange= (e) => {
        const {name,value} = e.target;
        setFormState({
            ...formState,
            [name]:value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(formState))
        navigate("/home")
    }
  return (
    <div>
    <form style={{width:"80%",margin:"auto",marginTop:"100px"}} onSubmit={handleSubmit}>
        <label >name</label> <br />
        <input type="email" name="email" value={formState.email} onChange={handleChange} required /> <br />
        <label >Passowrd</label><br />
        <input type="password" name="password" value={formState.password} onChange={handleChange} required />   <br />
        <button type="submit">login</button><br/>
    </form>
    </div>
  )
}

export default SignIn





