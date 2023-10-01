import React from 'react'
import './App.css';
import mobile from './assets/img/pngtree-cell-phone-vector-png-image_6529226.png'

const LogSec=()=>{

    return(
        <div className='w-full flex h-56 bg  justify-between items-center px-36 '>
            <div className=' space-y-2 flex flex-col w-1/2'>
                <button class="bg-pryellow hover:bg-blue-700 text-sm text-black font-bold py-3 rounded-lg">
                ورود به بانکداری مجازی
                </button>
                <button class="bg-transparent  text-pryellow font-semibold hover:text-white py-3 text-sm border border-pryellow hover:border-transparent rounded-lg">
                 سامانه مدیریت چک صیادی
                </button>
            </div>
            <div className='h-36 bg-black opacity-10 w-0.5 mx-3'/>
            <div className='flex w-1/2 justify-between items-center '>
                <div className='text-right w-1/2 '>
                    <h1 className='text-pryellow font-bold'> نکات امنیتی بانکداری مجازی</h1>
                    <ul >
                        <li >بانکداری مجازی چیست ؟</li>
                        <li >افتتاح حساب مجازی</li>
                        <li > نظرسنجی بانکداری مجازی</li>
                    </ul>
                </div>
                <div className='w-2/3 flex flex-col  h-36 rounded-lg bg-yellow-100 justify-center items-center p-3' >
                    <img src={mobile} className='w-1/3' />
                    <button class="bg-transparent mt-2  text-gray-500 font-medium  py-1 px-5 text-sm border border-gray-500  rounded-lg">
                        موبایل بانک
                    </button>

                </div>
                
            </div>
            
        </div>

    )

}

export default LogSec;
