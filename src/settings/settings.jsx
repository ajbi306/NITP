import React from 'react'
import Header from '../navbar/header';
import Setting from '../setting/setting';
import Sidebar from '../sidebar/sidebar';
import "./settings.css"


function Settings() {
  return (
        <div className='settingspage'>
            <Setting/>
            <Sidebar/>
        </div>
    
  )
}

export default Settings;