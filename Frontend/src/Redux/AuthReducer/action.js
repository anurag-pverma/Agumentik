import * as types from "./actionTypes";
import axios from "axios";


const signup = (userdetails) => async (dispatch) => {
    const {email,password} = userdetails
    try{
        const  response = await axios.post("https://agumentik-assignment-3l0a5i6cf-anurag-pverma.vercel.app/signup",{email,password});
        return dispatch({type:types.SIGNUP_SUCCESS,payload:response.data.msg})        
    }
    catch (error){
       console.log(error);
       return dispatch({type:types.SIGNUP_FAILURE,payload:"invalidCreditential"})
    }
    
}

const signin = (userdetails) => async (dispatch) => {
    const {email,password} = userdetails
    try{
        const response = await axios.post("https://agumentik-assignment-3l0a5i6cf-anurag-pverma.vercel.app/signin",{email,password});
        localStorage.setItem("token",response.data.token);
        return dispatch({type:types.SIGNIN_SUCCESS,payload:response.data.msg})   
    }
    catch (error){
       console.log(error);
      return dispatch({type:types.SIGNIN_FAILURE,payload:"invalidCreditential"})
    }
    
}

export {signup,signin}