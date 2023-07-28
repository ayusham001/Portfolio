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
            <header className={isLightMode ? 'z-50 flex flex-wrap justify-between max-[430px]:w-fit w-full py-4 px-6 fixed top-0 bg-orange-50 '
                : "z-50 flex flex-wrap justify-between max-[430px]:w-fit w-full py-4 px-6 fixed top-0 bg-sky-950"}>
                <div className="flex items-center  font-montserrat gap-10 md:w-auto w-full mb-2 md:mb-0 max-[770px]:w-screen">
                    <nav className='flex max-[770px]:gap-8 max-[430px]:gap-4 gap-6 justify-stretch'>
                        <Link to="/" className={`hover:underline focus:text-sky-500 ${location.pathname === '/' && 'text-sky-500'}`}>Home</Link>
                        <Link to="/about" className={`hover:underline focus:text-sky-500 ${location.pathname === '/about' && 'text-sky-500'}`}>About</Link>
                        <Link to="/Projects" className={`hover:underline focus:text-sky-500 ${location.pathname === '/Projects' && 'text-sky-500'}`}>Projects</Link>
                        <Link to="/contact" className={`hover:underline focus:text-sky-500 ${location.pathname === '/contact' && 'text-sky-500'}`}>Contact</Link>
                    </nav>
                </div>
                {isLightMode ? <img src={Logo} alt='logo' className="w-10  hidden md:block" /> : <img src={WLogo} alt='logo' className="w-10  hidden md:block" />}
                <div className="flex max-[770px]:gap-8 max-[430px]:gap-6 gap-6 justify-between items-center">
                    <a href="https://www.linkedin.com/in/ayush-mishra-809385215/"><LinkedInIcon className={isLightMode ? 'text-blue-600' : "text-white-800"} /></a>
                    <a href="https://github.com/ayusham001"><GitHubIcon className={isLightMode ? 'text-blue-950' : "text-white-800"} /></a>
                    <a href="https://auth.geeksforgeeks.org/user/ayusham001/practice">{isLightMode ? <img src={GFG} alt='logo' className="w-7 h-4" /> : <img src={WGFG} alt='logo' className="w-8 h-9" />}</a>
                    <a href="https://twitter.com/ayusham001"><TwitterIcon className={isLightMode ? 'text-sky-500' : "text-white-800"} /></a>
                    <a href="https://www.instagram.com/ayush.__mishra/"><InstagramIcon className={isLightMode ? 'text-rose-500' : "text-white-800"} /></a>
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
