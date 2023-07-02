import React, { useContext } from 'react'
import "./sidebar.css"
import { Context } from '../context'
// import { useContext } from 'react';

function Sidebar() {

    const {user} = useContext(Context);
  return (
    <div className='sidebar'>
        <div className='aboutme'> 
         <span className='abouttitle'>ABOUT ME</span>
            <img className='myimg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKgTZHvcHFri4mjFxC5t601aO4KwjjvnZb-g&usqp=CAU" alt="" />
            {user && <p>hii, guys I am {user.username}</p>}
        </div>

        <div className='categories'>
         <span className='categoriestitle'>CATEGORIES</span>
            <ul className='categorieslist'>
                <li className='categorieslistitems'>Tech</li>
                <li className='categorieslistitems'>Music</li>
                <li className='categorieslistitems'>Match</li>
                <li className='categorieslistitems'>Life</li>
                <li className='categorieslistitems'>Sport</li>
                <li className='categorieslistitems'>Cinema</li>
            </ul>
        </div>

        <div className='contact'> 
         <span className='contacttitle'>FOLLOW US</span>
         <div className='contacticons'>
        <i className="sideicon fa-brands fa-facebook"></i>
        <i className="sideicon fa-brands fa-linkedin"></i>
        <i className="sideicon fa-brands fa-twitter"></i>
        <i className="sideicon fa-brands fa-instagram"></i>
        </div>
     </div>
    </div>
  )
}

export default Sidebar;