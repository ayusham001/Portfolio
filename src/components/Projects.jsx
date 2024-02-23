import React from 'react'
import Card from './Card'
import khanapaani from '../assets/khanapaani.png'
import Linkloop from '../assets/linkloop.png'
import otl from '../assets/otl.png'
import todo from '../assets/todo.png'
import chat from '../assets/chat.png'
import tmc from '../assets/tmc.png'
import calc from '../assets/calc.png'
import clk from '../assets/clk.png'
import uber from '../assets/uber.png'
import TransitionEffect from './TransitionEffect'

export default function Projects({ isLightMode }) {
    const Projects = [
        {
            title: 'Linkloop: Social Media Web-App',
            imageUrl: Linkloop,
            body: "Introducing a versatile social media platform with a plethora of features, including posting, liking, and personalized sign-in options, creating diverse and engaging experiences for users worldwide. Join the digital revolution today!",
            tech:'ReactJS, Firebase, CSS, Material-UI',
            githubLink: 'https://github.com/ayusham001/Link-Loop',
            liveLink: 'https://linkloop.netlify.app/',
        },
        {
            title: 'Ticket Management System',
            imageUrl: tmc,
            body: "Implemented an automated ticket assignment system, sorting tickets to respective departments based on criteria and content analysis. Integrated real-time chat for user-admin communication, devised a streamlined ticket resolution workflow, and empowered users to close tickets upon completion, boosting autonomy and system efficiency.",
            tech:'Html, CSS, JavaScrit, NodeJs, ExpressJs, MongoDB, Socket.IO',
            githubLink: 'https://github.com/ayusham001/Ticket-Management-System',
            liveLink: 'https://github.com/ayusham001/Ticket-Management-System',
        },
        {
            title: 'Real-Time Chat',
            imageUrl: chat,
            body: "The Real-Time Chat Application with Socket.IO is a web-based chat platform that enables users to engage in live conversations with each other. The project utilizes Socket.IO, a powerful JavaScript library, to facilitate real-time bidirectional communication between the server and multiple clients, providing a seamless and interactive chat experience.",
            tech:'Html, CSS, JavaScrit, NodeJs, ExpressJs, Socket.IO',
            githubLink: 'https://github.com/ayusham001/Real-time-chat',
            liveLink: 'https://github.com/ayusham001/Real-time-chat',
        },
        {
            title: 'Uber Clone',
            imageUrl: uber,
            body: "Developed a responsive Uber clone showcasing advanced web development skills using Next.js, Tailwind CSS, Clerk for authentication, Stripe, and Google Maps API integration. The project reflects my expertise in crafting dynamic and feature-rich applications. The seamless combination of technologies ensures a user-friendly experience, while the use of Stripe enables secure payment transactions.",
            tech:'Next.js, Tailwind CSS, Clerk, Stripe, Google Maps API',
            githubLink: 'https://github.com/ayusham001/UberClone.git',
            liveLink: 'https://ubeerrr.netlify.app/',
        },
        {
            title: 'Khaana-Paani: Ultimate Restaurant Finder',
            imageUrl: khanapaani,
            body: "I developed an online restaurant search engine featuring local listings and user reviews. Users can effortlessly add, update, and delete restaurant data. Empowering food enthusiasts to explore and share their culinary experiences.",
            tech:'ReactJS, CSS, Material-UI',
            githubLink: 'https://github.com/ayusham001/Khaana-Paani',
            liveLink: 'https://khaanapaani.netlify.app/',
        },
        {
            title: 'Ultimate To-Do App',
            imageUrl: todo,
            body: "The Ultimate To-Do App streamlines productivity, empowering users to create account and login, effortlessly manage tasks, achieve goals, and stay organized. It's the go-to tool for individuals seeking effective task management in personal and professional endeavors.",
            tech:'Html, CSS, JavaScrit, NodeJs, ExpressJs, MongoDB',
            githubLink: 'https://github.com/ayusham001/ToDoApp',
            liveLink: 'https://github.com/ayusham001/ToDoApp',
        },
        {
            title: 'AN ODE TO LITERATURE (BLOG)',
            imageUrl: otl,
            body: "Literary Haven: Immerse in the world of literature on our blogging platform. Discover captivating blogs, poetic masterpieces, and insightful reviews. Experience the joy of words and explore the vast realms of literature with us.",
            tech:'Html, CSS, JavaScrit',
            githubLink: 'https://github.com/ayusham001/otl',
            liveLink: 'https://github.com/ayusham001/otl',
        },
        {
            title: 'Calculator',
            imageUrl: calc,
            body: "Developed a comprehensive calculator with robust functionality encompassing basic arithmetic operations (addition, subtraction, multiplication, division). Designed a user-friendly interface for seamless usage across various devices, ensuring accuracy and versatility in mathematical computations.",
            tech:'Html, CSS, JavaScrit',
            githubLink: 'https://github.com/ayusham001/Calculator',
            liveLink: 'https://ayusham001.github.io/Calculator/',
        },
        {
            title: 'Analog Clock',
            imageUrl: clk,
            body: "Designed and developed an analog clock, showcasing time visually through traditional hour, minute, and second hands. Implemented using frontend technologies, providing a dynamic and aesthetic display of time. The clock serves as a functional and visually appealing addition, demonstrating proficiency in frontend design and development skills.",
            tech:'Html, CSS, JavaScrit',
            githubLink: 'https://github.com/ayusham001/Analog-Clock',
            liveLink: 'https://ayusham001.github.io/Analog-Clock/',
        },

    ]
    return (
        <div className='mt-32'>
            <div>
                <div className='flex flex-col gap-8 my-3'>
                <TransitionEffect/>
                    {Projects.map((project, index) => (
                        <Card
                            key={index}
                            title={project.title}
                            imageUrl={project.imageUrl}
                            tech={project.tech}
                            body={project.body}
                            githubLink={project.githubLink}
                            LiveLink={project.liveLink}
                            isLightMode={isLightMode}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
