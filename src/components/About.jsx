import React from 'react'
import Skills from './skills'
import Experience from './Experience'
import Education from './Education'

export default function About({ isLightMode }) {
    return (
        <div className='mt-32'>
            <Experience isLightMode={isLightMode} />
            <Skills isLightMode={isLightMode} />
            <Education isLightMode={isLightMode} />
        </div>
    )
}
