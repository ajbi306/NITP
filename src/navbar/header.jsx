import React from 'react'
import "./header.css"
import {
	BrowserRouter as Router,
	Routes,
  Switch,
	Route,
	Link,
  BrowserRouter
} from 'react-router-dom';

import { useContext } from 'react';
import { Context } from '../context';

function Header() {
  const {user, dispatch} = useContext(Context);
  const handlelogout = (e) => {
    e.preventDefault();
    console.log("Logout")
    dispatch({type: "LOGOUT"});
  }

  
  return (
    
    <div className = "navbar">
      
      <div className="left">
        <i className="topicon fa-brands fa-facebook"></i>
        <i className="topicon fa-brands fa-linkedin"></i>
        <i className="topicon fa-brands fa-twitter"></i>
        <i className="topicon fa-brands fa-instagram"></i>
       </div>
      <div className="center" >
            <ul className="center">
              <li className="centeritems">
                <Link className='link' to = "/">HOME</Link>
              </li>
              <li className="centeritems">
              <Link className='link' to = "/">ABOUT</Link>
              </li>
              <li className="centeritems">
              <Link className='link' to = "/" >CONTACT </Link>
              </li>
              {user && <li className="centeritems">
              <Link className='link' to = "/write">WRITE</Link>
              </li>}
              {user && <li className="link" onClick={handlelogout}>LOGOUT</li>}
            </ul>
      </div>
       
      <div className="right">{
        user ?(
          <img src="" alt="" />
        
        ) : (
           <>
             <Link className='link' to = "login"> LOGIN</Link>   
             <Link className='link' to = "Register"> REGISTER</Link>   
           </>
        )
   }
   {user && <Link className='link' to = "/settings" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></Link>}
   
      </div>

      
    </div>
    
    
    
  )
}

export default Header;