import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

function Card({ title, imageUrl, body,tech, githubLink, LiveLink, isLightMode }) {
    return (
        <div
            className={
                isLightMode
                    ? 'flex justify-evenly flex-wrap gap-3 items-center rounded-xl p-4 bg-sky-950 text-orange-50 w-3/4 md:w-2/3 mx-auto '
                    : 'flex justify-evenly flex-wrap gap-3 items-center rounded-xl p-4 bg-orange-50 text-sky-950 w-3/4 md:w-2/3 mx-auto '
            }
        >
            <div className="md:w-1/2 flex-grow overflow-hidden border-black border rounded-lg">
                <img
                    src={imageUrl}
                    alt=""
                    className="transition-transform transform hover:scale-110 duration-300"
                />
            </div>
            <div className=" md:w-2/5 flex flex-col gap-2">
                <div className="text-2xl font-bold">
                    <h3>{title}</h3>
                </div>
                <div className="text-sm">
                    <p><span className='font-semibold'>Tech used: </span>{tech}</p>
                </div>
                <div className="text-sm">
                    <p>{body}</p>
                </div>
                <div className="items-center flex gap-2">
                    <a href={githubLink}>
                        <GitHubIcon className={isLightMode ? 'text-white' : 'text-blue-950'} />
                    </a>
                    <a
                        href={LiveLink}
                        target="_blank"
                        className={
                            isLightMode
                                ? 'bg-sky-800 text-white rounded-md py-1 px-4 hover:text-sky-950 hover:border-current  hover:bg-white'
                                : 'bg-sky-800 text-orange-50 rounded-md py-1 px-4 hover:text-sky-900 hover:bg-white hover:shadow-current hover:shadow-sm'
                        }
                    >
                        Visit Project
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
