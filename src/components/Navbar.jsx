import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import '../index.css'
import Logo from '../assets/logo.png';
import WLogo from '../assets/whitelogo.png';
import WGFG from '../assets/gfghite.png';
import GFG from '../assets/gfg.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Navbar({ isLightMode, toggleLightMode }) {
    const location = useLocation();
    return (
        <>
            <header className={`fixed top-0 w-full flex flex-wrap md:flex-nowrap justify-between py-4 px-6 pr-6 z-50 ${isLightMode?"bg-orange-50":"bg-sky-950"} `}>
                <nav className='flex max-[770px]:gap-8 max-[430px]:gap-6 gap-6 justify-between items-center md:w-fit w-full'>
                    <Link to="/" className={`hover:underline focus:text-sky-500 ${location.pathname === '/' && 'text-sky-500'}`}>Home</Link>
                    <Link to="/about" className={`hover:underline focus:text-sky-500 ${location.pathname === '/about' && 'text-sky-500'}`}>About</Link>
                    <Link to="/Projects" className={`hover:underline focus:text-sky-500 ${location.pathname === '/Projects' && 'text-sky-500'}`}>Projects</Link>
                    <Link to="/contact" className={`hover:underline focus:text-sky-500 ${location.pathname === '/contact' && 'text-sky-500'}`}>Contact</Link>
                </nav>
                {isLightMode ? <img src={Logo} alt='logo' className="w-10  hidden md:block" /> : <img src={WLogo} alt='logo' className="w-10  hidden md:block" />}
                <div className="flex max-[770px]:gap-8 max-[430px]:gap-6 gap-6 justify-between items-center w-full md:w-fit">
                    <a href="https://www.linkedin.com/in/ayush-mishra-809385215/" target='_blank' ><LinkedInIcon className={isLightMode ? 'text-blue-600' : "text-white-800"} /></a>
                    <a href="https://github.com/ayusham001" target='_blank' ><GitHubIcon className={isLightMode ? 'text-blue-950' : "text-white-800"} /></a>
                    <a href="https://auth.geeksforgeeks.org/user/ayusham001/practice"target='_blank'>{isLightMode ? <img src={GFG} alt='logo' className="w-7 h-4" /> : <img src={WGFG} alt='logo' className="w-8 h-9" />}</a>
                    <a href="https://twitter.com/ayusham001" target='_blank'><TwitterIcon className={isLightMode ? 'text-sky-500' : "text-white-800"} /></a>
                    <a href="https://www.instagram.com/ayush.__mishra/"target='_blank'><InstagramIcon className={isLightMode ? 'text-rose-500' : "text-white-800"} /></a>
                    <button
                        onClick={toggleLightMode}
                        className={`rounded-full w-8 h-8 ${isLightMode ? 'bg-sky-800 text-white' : 'bg-sky-100 text-gray-800'}`}
                    >
                        {isLightMode ? '🌙' : '☀️'}
                    </button>
                </div>
            </header>
        </>
    );
}
