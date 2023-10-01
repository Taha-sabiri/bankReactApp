import React from 'react'
import './App.css';
import logo from './assets/img/logo pasargad.png'
import { BanknotesIcon , CreditCardIcon ,ReceiptPercentIcon , DevicePhoneMobileIcon , CurrencyDollarIcon  } from '@heroicons/react/24/outline'



const IconList=()=>{

    return(
        <div className=' flex h-40 justify-between  items-baseline px-36 py-5 '>
           <div className='flex w-full h-full bg-yellow-100 text-black text-gray-500 rounded-lg justify-between items-center'>
                <div className='flex flex-col p-10 text-center justify-center items-center '>
                    <BanknotesIcon width={50}/>
                    <h1 className='text-sm'>استعلام چک</h1>
                </div>

                <div className='flex flex-col p-10 text-center  justify-center items-center '>
                    <CurrencyDollarIcon width={50}/>
                    <h1 className='text-sm'>حساب ارزی </h1>
                </div>

                <div className='flex flex-col p-10 text-center justify-center items-center '>
                    <CreditCardIcon width={50}/>
                    <h1 className='text-sm'>خدمات کارت</h1>
                </div>

                <div className='flex flex-col p-10 text-center justify-center items-center '>
                    <ReceiptPercentIcon width={50}/>
                    <h1 className='text-sm'>پرداخت قبوض</h1>
                </div>

                <div className='flex flex-col p-10 text-center justify-center items-center '>
                    <DevicePhoneMobileIcon width={50}/>
                    <h1 className='text-sm'>خدمات آنلاین</h1>
                </div>

                
           </div>
        </div>

    )

}

export default IconList;
