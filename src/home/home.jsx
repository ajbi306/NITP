import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Header1 from '../header1/header';
import Posts from '../posts/posts';
import Sidebar from '../sidebar/sidebar';
import { useEffect } from 'react';
import { Fade, Zoom } from 'react-reveal';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

import "./home.css"



function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchpost = async () =>{
        const path = "/posts";
        // console.log(path); 
        const res = await axios.get("/posts");
      
        setPosts(res.data);
        console.log(posts);
    };
    fetchpost();
  }, [])
  
  return (


    <div className='homeitems'>
        <Zoom>
          <Header1/> 
        </Zoom>
        <div className='homepost'>
        
        <Posts posts = {posts} />
        <div className='side'> 
        <Sidebar/>
        </div>
        </div>
    </div>

    
  )
}

export default Home;