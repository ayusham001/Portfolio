import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Icons from './Icons';

const Details = ({ course, duration, place, isLightMode }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 custom-width md:w-[80%] flex flex-col items-start justify-between md:mx-auto'
    >
      <Icons isLightMode={isLightMode} reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl max-[640px]:text-lg'>{course}</h3>
        <span className={`capitalize font-medium max-[640px]:text-sm ${isLightMode ? 'text-sky-700' : 'text-gray-400'}`}>
          {duration} | {place}
        </span>
      </motion.div>
    </li>
  );
};

export default function Education({ isLightMode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className='mb-36 mt-24'>
      <h2 className='font-bold text-5xl mb-20 w-full text-center md:text-3xl max-[640px]:text-2xl'>Education</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%]'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className={`absolute left-[36px] max-[770px]:left-0 top-0 w-[4px] h-full origin-top ${isLightMode ? 'bg-sky-950' : 'bg-orange-50'}`}
        />
        <div className='mx-2'>
          <ul className='w-full flex flex-col items-start justify-between ml-4'>
            <Details
              isLightMode={isLightMode}
              course="Bachelor of Technology - Information Technology"
              duration=" 2020 - Present"
              place="United College of Engineering and Research"
            />
            <Details
              isLightMode={isLightMode}
              course="Intermediate - PCM"
              duration=" 2018 - 2020"
              place="New RSJ Public School"
            />
            <Details
              isLightMode={isLightMode}
              course="High School"
              duration=" 2016 - 2018"
              place="New RSJ Public School"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
