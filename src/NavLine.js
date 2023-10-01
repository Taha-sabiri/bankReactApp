import React from 'react'
import './App.css';

const NavLine=()=>{

    return(
        <div className='w-full flex h-10 bg bg-black justify-between items-center px-24 '>
            <h1 className='text-white text-sm font-light'> یکشنبه ۲۴ بهمن</h1>
            <div className='flex'>
                <h1 className='text-white text-sm cursor-pointer font-light px-1 '> En </h1>
                <h1 className='text-white text-sm font-light'>/</h1>
                <h1 className='text-white text-sm cursor-pointer px-1'> Fa </h1>
            </div>
        </div>

    )

}

export default NavLine;
