import React from 'react'
import Singlepost from '../singlepost/singlepost';
import Sidebar from '../sidebar/sidebar'
import "./single.css"

function Single() {
  return (
    <div className='single'>
    <Singlepost/>
    <Sidebar/>
    </div>
  )
}

export default Single;