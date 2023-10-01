import React from 'react'
import './App.css';
import logo from './assets/img/logo pasargad.png'


const Nav=()=>{

    return(
        <div className=' flex h-28 bg  justify-between  items-baseline px-64 py-5    '>
           <div className=''>
                <ul className='flex text-black text-sm'>
                    <li className='pl-7 cursor-pointer '><a> صفحه اصلی</a></li>
                    <li className='pl-7 cursor-pointer '><a>خدمات</a></li>
                    <li className='pl-7 cursor-pointer '><a> بانکداری الکترونیکی</a></li>
                </ul>
           </div>
           <div className=' '>
            <img src={logo} className='w-20 -mb-4'></img>
           </div>
           <div className=''>
                <ul className='flex text-black text-sm '>
                    <li className='pl-7 cursor-pointer '><a> صفحه اصلی</a></li>
                    <li className='pl-7 cursor-pointer '><a>خدمات</a></li>
                    <li className='pl-7 cursor-pointer '><a> بانکداری الکترونیکی</a></li>
                </ul>
           </div>
        </div>

    )

}

export default Nav;
