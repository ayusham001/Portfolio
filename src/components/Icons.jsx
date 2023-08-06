import React from 'react'
import { motion, useScroll } from 'framer-motion'

export default function Icons({ reference, isLightMode }) {


    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    );

    return (
        <>
            <figure className={`absolute left-0 max-[770px]:left-[-17px] ${isLightMode?'stroke-sky-950':'stroke-orange-50'} `}>
                <svg width="75" height="75" viewBox='0 0 100 100' className='max-[770px]:-rotate-180 -rotate-90'>
                    <circle cx="75" cy="50" r="20" className={`stroke-1 fill-none stroke-sky-600`} />
                    <circle cx="75" cy="50" r="20" className={`stroke-[5px] ${isLightMode?'fill-orange-50':'fill-sky-950'}`}/>
                    <circle cx="75" cy="50" r="10" className={`animate-pulse stroke-1 fill-sky-600`} />
                </svg>
            </figure>
        </>
    )
}
