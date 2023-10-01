import React from 'react'
import './App.css';
import logo from './assets/img/logo pasargad.png'
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { Tabs } from 'flowbite-react';




const TabSec=()=>{

    return(
        <div className='h-98 px-32'>
            <Tabs.Group aria-label="Default tabs" style="default">
      <Tabs.Item active icon={HiUserCircle} title="Profile" className='text-pryellow'>
      
      </Tabs.Item>
      
    </Tabs.Group>

         
        </div>

    )

}

export default TabSec;
