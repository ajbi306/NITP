import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Context } from '../context';


import "./write.css"

function Write() {
  const {user} = useContext(Context);

  const [title, settitle] = useState();
  const [desc, setdesc] = useState();
  const [mode, setmode] = useState(false);
  const [err, seterr] = useState(false);
  const [file, setfile] = useState();

  //const [desc, setdesc] = useState();

  const handlesubmit = async (e) => {
   
    e.preventDefault();
    console.log("yes");
    console.log(user.username);

    const newposts = {
    username: user.username,
    title,
    desc,
  };

  if(file){
    const data = new FormData();
    const filename = Date.now() + file.name;
    data.append("name", filename);
    data.append("file", file);
    newposts.photo = filename;

    try{
      await axios.post("/upload", data);
    } catch(err){

    }
  }

  try{
  
    const res = await axios.post("/posts", newposts);
    setmode(true);
    window.location.replace("/");
    console.log(res.data);
  
  }catch(err){
    // seterr(true);
    // settitle("");
    alert("Try with another title");
    console.log(err);
  }

  };

   return (

    
      
      
    <div className='write'>
        {file && (
         <img className='writeimg' src = {URL.createObjectURL(file)} alt="" />)}
      <form className='writeform'>
      <div className='writeformgroup1'>
       
        <label htmlFor="fileinput">
        <i className = "writeicon fa-solid fa-plus"></i>
        </label>
        <input type="file"  id="fileinput" style={{display:'none'}} className='writeinput1' onChange={e => setfile(e.target.files[0])} autoFocus = {true}/>
        <input type="text"  placeholder='Title' onChange={e => settitle(e.target.value)} className='writeinput' required/>
        
      </div>

     <div className='writeformgroup2'>
        <textarea placeholder='Description' className='writedescription' onChange={e => setdesc(e.target.value)} required></textarea>

    </div>

    </form>

    <button className='writesubmit'  onClick={handlesubmit}>Publish</button>
    
    {/* {err && alert("Try with another title") } */}
    {mode && alert("Post has been uploaded") }
           
    </div>
  )
}

export default Write;