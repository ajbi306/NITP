import React from 'react'
import "./post.css"
import {Link} from 'react-router-dom'
import  Fade  from 'react-reveal';
import Single from '../single/single'


function Post({post}) {
  
     console.log(post);
  
  var s = post.desc;
  var l = 80;

  if(s.length < l)l = s.length;
  const desc = s.substring(0, l) + "...";

  console.log(desc);

  const PF = "http://localhost:4000/images/";
  return (
    <div className='postcontents'>
 
    
      <Fade left >
      {post.photo && <img className='postimg' src={PF + post.photo} alt="" />}
      </Fade>
      
        {/* <div className='posttitle'>
        
          {post.categories.map((c) => (
            <Fade bottom>
            <span className='posttitle1'>{c}</span>
            </Fade>
            
        ))}
         </div> */}
         
        <Fade left>
        <Link  style={{textDecoration:"none", cursor: 'pointer', color: "black"}} to = {`/post/${post._id}`}   > <span className='postabout'> {post.title} </span> </Link>
        </Fade>
       <hr />
       <Fade left>
      <span className='postdate'>{new Date(post.createdAt).toDateString()}</span>
      </Fade>
      <Fade left>
      <span className='desc'>{desc}</span>
      </Fade>
      

    </div>
  );
}

export default Post;