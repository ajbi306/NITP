import React from 'react'
import Header1 from '../header1/header';
import Post from '../post/post';
import Sidebar from '../sidebar/sidebar';
import Single from '../single/single';
import Singlepost from '../singlepost/singlepost';
import { Fade } from 'react-reveal/Fade';


import "./posts.css"

function Posts({posts}) {

  // console.log("18u2783y8y");
  return (
    <div className='postitems'>
   
     {posts.map((p) => (
      
       <Post post = {p}/>
      
     ))}


       
    </div>
  ); 
}

export default Posts;