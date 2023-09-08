import React from 'react'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import TransitionEffect from './TransitionEffect'

export default function About({ isLightMode }) {
    return (
        <div className='mt-32'>
            <TransitionEffect />
            <Experience isLightMode={isLightMode} />
            <Skills isLightMode={isLightMode} />
            <Education isLightMode={isLightMode} />
        </div>
    )
}
