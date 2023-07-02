import React from 'react'
import Sidebar from '../sidebar/sidebar';
import "./setting.css"
import axios from 'axios';
import { useContext } from 'react';
import { useState } from 'react';

import { Context } from '../context';




function Setting() {

  const {user} = useContext(Context);
  console.log(user)
  const [username, setUsername] = useState();
  const [email, setMail] = useState();
  const [password, setPassword] = useState();
  const [file, setFile] = useState(null);

  //const [desc, setdesc] = useState();

  const handleupdate = async (e) => {
   
    e.preventDefault();
    // console.log("yes");
    // console.log(user.username);

    const updateduser = {
    userId: user._id,
    username,
    email,
    password,
    
  };

  if(file){
    const data = new FormData();
    const filename = Date.now() + file.name;
    data.append("name", filename);
    data.append("file", file);
    updateduser.profilepic = filename;

    try{
      await axios.post("/upload", data);
    } catch(err){

    }
  }

  try{
  
    const res = await axios.put("/users/" + user._id, updateduser);
    console.log(res.data);
  
  }catch(err){
    console.log(err);
  }

  };

  const PF = "http://localhost:4000/images/";
  
  return (
    
    <div className='wrapper' >
      <form className='forminput'>
        {/* <div className='imgsetting'>
           {file && <img className='settingimg' src= {URL.createObjectURL(file)} alt="" />}
            <label htmlFor="fileinput">
            <i className = "settingicon fa-solid fa-plus"></i>
            </label>
            <input type="file" name="" id="fileinput" onChange={(e) => setFile(e.target.files[0])} style={{display:"none"}} />
        </div>  */}
        
        <div className='settingtitle'>
          <span className='Updatetext'> Update Your Account</span>
          <span className='deletetext'> Delete Your Account</span>
        </div>

        <div className='settinginput'>
            <label> Username </label>
            <input type="text" name="" id="username" className='settinginput1' placeholder='Enter New Username' onChange = {(e) => setUsername(e.target.value)}/>
            <label > Email </label>
            <input type="text" name="" id="Email" className=' settinginput1' placeholder='Enter New Email' onChange = {(e) => setMail(e.target.value)}/>
             <label > Password </label>
            <input type="text" name="" id="Password" className='settinginput1' placeholder='Enter New Password' onChange = {(e) => setPassword(e.target.value)}/>

            
        </div>
        
      
        </form>
       
      <div className='settingupdate'>  <button className='settingupdate1' onClick={handleupdate}> Update </button></div>
       
    </div>
    

  )
}

export default Setting;