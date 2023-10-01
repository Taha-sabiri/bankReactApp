

import React from 'react'
import './App.css';
import { Carousel, DarkThemeToggle } from 'flowbite-react';
import slider1 from './assets/img/28-01+copy.jpg'
import slider2 from './assets/img/2ac19845-b44e-4764-b93a-04f8b2d1a439.png'
import slider3 from './assets/img/349864.jpg'
import slider4 from './assets/img/پاسارگاد.jpg'






const Slider=()=>{

    return(
        <div className='h-72 px-36 my-5 '>
                 
            <Carousel slide={true} indicators={true} slideInterval={1000}    >
                <img 
                  alt="..."
                  src={slider2}

                />
                <img
                  alt="..."
                  src={slider2}
                />
                <img
                  alt="..."
                  src={slider3}
                /> 
                <img
                  alt="..."
                  src={slider4}
                />

            </Carousel>


        </div>
    )
  

    

}

export default Slider;
