import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import './register.css'

function Register() {

    const [username, setname] = useState("");
    const [email, setmail] = useState("");
    const [password, setpassword] = useState("");
    const [err, seterr] = useState(false);

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

    const handlesubmit = async(e) =>{
        e.preventDefault();
        // seterror(false);

        try{
           const res = await axios.post("/auth/register",{
              username, 
              email,
              password,
           })
           console.log(res.data);
           alert("Account has successfully created");
           res.data && window.location.replace("/login");
           
        }catch(error){
          console.log(error.response.data);
           seterr(error.response.data);
        }
        
    } 

  return (
    <div className='register1'>
        <div className='register_page'>
        <form action="" className='register_form1' onSubmit={handlesubmit}>
            <label className='label' htmlFor=""> Name </label>
            <input 
            type="text" 
            className='name'
            value= {username}
            onChange = {e => setname(e.target.value)}
            required/>
            <label className='label' htmlFor="">Email</label>
            <input 
            type="text" 
            className='mail'
            value= {email}
            onChange = {e => setmail(e.target.value)}
            required/>
            <label className='label' htmlFor="">Password</label>
            <input 
            type="password" 
            id = "Pass"
            className='password'
            value= {password}
            onChange = {e => setpassword(e.target.value)}
            required/>
            
            <div className='check'>
            <input className = 'check' id = 'check' type="checkbox" onChange={showpassword}/>
            <label htmlFor="">Show Password</label>
            </div>

          <button type='submit' className='registerbutton'> Register</button>
          
        </form>

    </div>
        {err && <span>{err}</span>}
    </div>
  )
}

export default Register;