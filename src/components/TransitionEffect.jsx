import React from 'react'
import { motion } from 'framer-motion'

const TransitionEffect = ()=> {
  return (
    <div>
        <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-sky-500"
        initial={{x:"100%",width : "100%"}}
        animate={{x:'0%', width: "0%"}}
        transition={{duration:0.5, ease: "easeInOut"}}
        />
        <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-orange-50"
        initial={{x:"100%",width : "100%"}}
        animate={{x:'0%', width: "0%"}}
        transition={{delay:0.2, duration:0.5, ease: "easeInOut"}}
        />
        <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-sky-900"
        initial={{x:"100%",width : "100%"}}
        animate={{x:'0%', width: "0%"}}
        transition={{delay:0.4,duration:0.5, ease: "easeInOut"}}
        />
    </div>
  )
}

export default TransitionEffect;