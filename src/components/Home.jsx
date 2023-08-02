import React, { useState } from 'react';
import Me from '../assets/me.png';
import WBulb from '../assets/Wbulb.png';
import Bulb from '../assets/bulb.png';
import Resume from '../assets/Resume.pdf';
import Hireme from '../assets/hireme.png';
import DHireme from '../assets/DHireme.png';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import '../index.css'

export default function Home({ isLightMode }) {
    return (
        <div className={`'flex justify-center items-center  font-montserrat mt-32 `}>
            <div className='flex flex-wrap justify-around items-center md:px-1'>
                <div className='flex items-end'>
                    <div className='hidden md:block md:w-24'>
                        {isLightMode ? <img src={DHireme} className='animate-pulse cursor-pointer hover:animate-none' /> : <img src={Hireme} className='animate-pulse cursor-pointer hover:animate-none' />}
                    </div>
                    <div className='px-4 '>
                        <img src={Me} className='rounded-full' />
                    </div>
                </div>
                <div className='flex flex-col gap-8 p-4 md:w-1/2'>
                    <p className={isLightMode ? 'text-2xl md:text-5xl text-sky-900' : 'text-2xl md:text-5xl text-sky-500'}>Turning Vision Into Reality With Code And Design</p>
                    <p className='text-sm md:text-lg'>
                        Hi I'm Ayush Mishra,<br />As a full-stack developer, I am dedicated to turning ideas into innovative web applications.
                        Explore my latest projects and articles showcasing my expertise in web development.
                    </p>
                    <div className='flex justify-between'>
                        <div className='flex gap-4 items-center'>
                            <a href={Resume} target='_blank' className={isLightMode ? 'bg-sky-800 flex text-white rounded-md py-1 px-4 hover:shadow-current hover:shadow-sm hover:text-sky-950  hover:bg-white'
                                : 'bg-sky-800 flex rounded-md w-max py-1 px-4 hover:text-sky-950 hover:bg-white '}>
                                Resume
                                <div className='hidden md:block'>
                                    <OpenInNewRoundedIcon className=' md:ml-1' /></div>
                            </a>
                            <a href='mailto:ayush.info.dev@gmail.com' target='_blank' className='underline'>
                                Email
                            </a>
                        </div>
                        <div className='relative'>
                            {isLightMode ? <img src={Bulb} className='w-32 animate-bulb cursor-pointer hover:animate-none' alt='Bulb' /> : <img src={WBulb} className='w-32 cursor-pointer animate-bulb hover:animate-none' alt='Bulb' />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
