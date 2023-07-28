import React from 'react'
import Card from './Card'
import khanapaani from '../assets/khanapaani.png'
import Linkloop from '../assets/linkloop.png'
import otl from '../assets/otl.png'
import todo from '../assets/todo.png'

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
            title: 'Khaan-Paani: Ultimate Restaurant Finder',
            imageUrl: khanapaani,
            body: "I developed an online restaurant search engine featuring local listings and user reviews. Users can effortlessly add, update, and delete restaurant data. Empowering food enthusiasts to explore and share their culinary experiences.",
            tech:'ReactJS, CSS, Material-UI',
            githubLink: 'https://github.com/ayusham001/Khaana-Paani',
            liveLink: 'https://khaanapaani.netlify.app/',
        },
        {
            title: 'Ultimate To-Do App',
            imageUrl: todo,
            body: "The Ultimate To-Do App streamlines productivity, empowering users to effortlessly manage tasks, achieve goals, and stay organized. It's the go-to tool for individuals seeking effective task management in personal and professional endeavors.",
            tech:'Html, CSS, JavaScrit, NodeJs, ExpressJs',
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

    ]
    return (
        <div className='mt-32'>
            <div>
                <div className='flex flex-col gap-8 my-3'>
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
