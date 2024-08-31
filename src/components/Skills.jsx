import React from 'react'
import { motion } from 'framer-motion'
import web from '../assets/web.png';
import webWhite from '../assets/webWhite.png';


const Skill = ({ name, x, y, isLightMode }) => {
    return (
        <motion.div className={`flex items-center absolute py-3 px-6 lg:py-2 sm:text-sm sm:p-1  max-[640px]:text-xs max-[640px]:bg-transparent md:py-1.5 md:px-3 justify-center max-[640px]:font-bold rounded-full font-lg hover:cursor-pointer p-4 
        ${isLightMode ? 'bg-sky-950 text-orange-50 max-[640px]:text-sky-950 ' : 'bg-orange-50 text-sky-950 max-[640px]:text-orange-50'}`}
            whileHover={{ scale: 1.25 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
            // viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

export default function Skills({isLightMode}) {
    return (
        <div className=''>
            <h2 className='font-bold text-5xl mb-20 w-full text-center md:text-3xl max-[640px]:mb-5 max-[640px]:text-2xl'>Skills</h2>
            <div className={`w-full lg:h-[80vh] max-[780px]:mt-1 mt-10 sm:h-[60vh] max-[640px]:h-[50vh] h-screen relative flex items-center justify-center rounded-full 
            ${isLightMode?'bg-circularLight lg:bg-circularLightLg md:bg-circularLightMd max-[780px]:bg-circularLightSm':'bg-circularDark lg:bg-circularDarkLg md:bg-circularDarkMd max-[780px]:bg-circularDarkSm'}`}>
                <div
                    className={isLightMode ?"flex items-center md:text-sm max-[780px]:text-sm justify-center rounded-full font-lg cursor-pointer"
                    : 'flex items-center max-[780px]:font-bold md:text-sm justify-center max-[780px]:text-sm rounded-full font-lg cursor-pointer'
                    }
                >
                <div className="relative group">
                    {isLightMode ? (
                        <img src={web} className="w-12 h-12" />
                    ) : (
                        <img src={webWhite} className="w-12 h-12" />
                    )}
                <span
                    className={`absolute left-1/2 transform -translate-x-1/2 -top-8 translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 text-sm px-2 py-1 rounded-full
                        ${isLightMode ? 'bg-sky-950 text-orange-50 max-[640px]:text-sky-950' : 'bg-orange-50 text-sky-950 max-[640px]:text-orange-50'}`}>
                    Web
                </span>
                </div>
                </div>
                <Skill name='CSS' x='-5vw' y='-12vw' isLightMode={isLightMode} />
                <Skill name='HTML' x='-21vw' y='-1vw' isLightMode={isLightMode} />
                <Skill name='Tailwind CSS' x='-26vw' y='8vw' isLightMode={isLightMode}  />
                <Skill name='JavaScript' x='0vw' y='12vw' isLightMode={isLightMode}  />
                <Skill name='TypeScript' x='18vw' y='-14vw' isLightMode={isLightMode}  />
                <Skill name='ReactJS' x='-22vw' y='-8vw' isLightMode={isLightMode}  />
                <Skill name='NextJS' x='-36vw' y='-10vw' isLightMode={isLightMode}  />
                <Skill name='Material-UI' x='-18vw' y='-14vw' isLightMode={isLightMode}  />
                <Skill name='ExpressJS' x='13vw' y='-9vw' isLightMode ={isLightMode} />
                <Skill name='Python' x='10vw' y='-20vw' isLightMode={isLightMode}  />
                <Skill name='Firebase' x='26vw' y='9vw' isLightMode={isLightMode}  />
                <Skill name='DSA' x='35vw' y='-1vw' isLightMode={isLightMode}  />
                <Skill name='NodeJS' x='35vw' y='-10vw' isLightMode={isLightMode}  />
                <Skill name='SCSS' x='-38vw' y='-1vw' isLightMode={isLightMode}  />
                <Skill name='DBMS' x='-22vw' y='-20vw' isLightMode={isLightMode}  />
                <Skill name='SQL' x='18vw' y='4vw' isLightMode={isLightMode}  />
                <Skill name='MongoDB' x='26vw' y='-5vw' isLightMode={isLightMode}  />
            </div>
        </div>
    )
}
