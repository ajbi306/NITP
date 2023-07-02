import React from 'react'
import "./header1.css"
// import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-reveal/Fade';
// import 'react-slideshow-image/dist/styles.css'


function Header1() {
  const slideImages = [
    {
      url: 'https://cdn.pixabay.com/photo/2017/05/30/03/58/blog-2355684__480.jpg',
      caption: 'Slide 1'
    },
    {
      url: 'https://cdn.pixabay.com/photo/2012/05/07/18/57/blog-49006__480.png',
      caption: 'Slide 2'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 3'
    },
  ];
  return (
    <div className='header1contents'>
        <div className='header1title'> 
    
    </div>
        <div className = 'h1img'>
            {/* <Fade left> */}
            <img className = 'h1img' src= {slideImages[0].url}/>
            {/* </Fade> */}
      </div>
      
        
    </div>
  )
}

export default Header1;