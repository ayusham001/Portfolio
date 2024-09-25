import React, { useEffect } from 'react';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import TransitionEffect from './TransitionEffect';
import OpenSource from './OpenSourceCont';
import Freelance from './FreelanceWork';

export default function About({ isLightMode }) {
    useEffect(() => {
        const hash = window.location.hash;
        
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                const yOffset = -100;
                const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: yPosition, behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <div className='mt-32'>
            <TransitionEffect />
            <div id="experience">
                <Experience isLightMode={isLightMode} />
            </div>
            <div id="freelance">
                <Freelance isLightMode={isLightMode} />
            </div>
            <div id="opensource">
                <OpenSource isLightMode={isLightMode} />
            </div>
            <div id="skills">
                <Skills isLightMode={isLightMode} />
            </div>
            <div id="education">
                <Education isLightMode={isLightMode} />
            </div>
        </div>
    );
}
