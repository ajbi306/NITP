import axios from 'axios';
import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../context';
import "./singlepost.css"

function Singlepost() {
 
 
 const location = useLocation();
 const path = location.pathname.split("/")[2];

  const [post, setPost] = useState([]);

  const {user} = useContext(Context);
  const [title, settitle] = useState();
  const [desc, setdesc] = useState();
  const [mode, setmode] = useState(false);

  useEffect(() =>{
      const getPost = async() => {
      console.log(123)
      const path1 = "/posts/" + path;
      console.log(path1);
      const res = await axios.get(path1);
      setPost(res.data)
      settitle(res.data.title);
      setdesc(res.data.desc);
    
      };
     getPost();
  }, [path]);

  const PF = "http://localhost:4000/images/";

  console.log(post);
  
  const handledelete = async () => {
    try{
      await axios.delete("/posts/" + path, {
        data: {username: user.username},
      });
      window.location.replace("/");
    }catch (err){

    }
  }

  const handleupdate = async () => {
    try{
      await axios.put("/posts/" + path, {
       username: user.username,
          title,
          desc,
      });
      window.location.reload();
    }catch (err){

    }
  }

  return (
    <div className='singlepost'>
    <div className='singlepostcontents'>
      {post.photo && <img className='postimg' src= { PF + post.photo} alt="" />}

      { user && user.username === post.username &&  <div className='postcrud'>
         <i  onClick = {() => setmode(true)} class="crudicon1 fa-solid fa-pen-to-square"></i> 
         <i onClick = {handledelete} class="fa-solid fa-trash-can"></i>
         
     </div>}
     
     
     <div className='posttitle'> 
      {mode ? <input type="text" className='title' autoFocus value = {title} onChange = {(e) => settitle(e.target.value)}/> :
        <h1 className='postheadline'>{post.title}</h1> 
        }
     </div>
        
        
     

     <div className='postadmin'>
         <span className='Author'>{post.username}</span>
         <span className='posttime'>{new Date(post.createdAt).toDateString()}</span>
     </div>
      
     {mode ? <textarea className='desc' value={desc} onChange = {(e) => setdesc(e.target.value)}/> :
         <p className='aboutpost'>{post.desc} </p>
        }
    
      {mode && <button className='update' onClick={handleupdate}> Update </button>}

   
    </div>

    </div>
  )
}

export default Singlepost;