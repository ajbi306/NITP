import axios from 'axios';
import { useContext, useState } from 'react';
import React from 'react'
import { useRef } from 'react';
import "./login.css"
import { Context } from '../context';

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isfetching} = useContext(Context);
  const [err, setErr] = useState(false);

  const showpassword = () => {
    var x = document.getElementById("check");
    var y = document.getElementById("Pass");
    if (x.checked === true) {
      console.log("Yes");
      y.type = "text";
    } else {
      y.type = "password";
    }
  }

  const handlesubmit = async (e) =>{
    e.preventDefault();
    // setErr(false);

    console.log(userRef.current.value);
    console.log(passwordRef.current.value);

    dispatch({type: "LOGIN_START"});

    try{
      const res = await axios.post("/auth/login",{
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
         
         console.log(res.data);
         dispatch({type: "LOGIN_SUCCESS", payload: res.data});
         window.location.replace("/");

    }catch(err){
      dispatch({type: "LOGIN_FAILURE"});
      setErr(true);
    }
  }

  return (

    
    <div className='login'>
        <div className='registerform'>
        <form className='loginform' onSubmit={handlesubmit}>
           <label > Username </label>
            <input type="text" name="" 
            id="emaillogin"
             className='emaillogin'
             ref = {userRef}
            
            />
            <label > Password </label>
            <input type="password" 
             id="Pass"
             className='passwordlogin'
              ref = {passwordRef}
            />
          <div className='qqq'>
          <input  className = 'check' type="checkbox" id = 'check' onChange={showpassword}/>
          <span>Show Password</span>
          </div>
         
          <button className='loginbutton' type='submit' disabled = {isfetching}> Login </button>
          {err && <span className='msg'> username or password incorrect </span>}
          
        </form>
        
        
        
        </div>
        
       

   </div>
  )
}

export default Login;