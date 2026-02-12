import React from 'react'
import NavLink from '../shared/navLink'

const Footer = () => {
    const socials = [
        {
            "name": "GitHub",
            "url": "https://github.com/ManoVikram",
        },
        {
            "name": "LinkedIn",
            "url": "https://www.linkedin.com/in/manovik18",
        },
        {
            "name": "X (Twitter)",
            "url": "https://x.com/ManoVik18",
        },
        {
            "name": "Instagram",
            "url": "https://www.instagram.com/themanovik18",
        },
    ]

    return (
        <footer className="bg-primary min-h-[80dvh] px-6 md:px-20 py-16 md:py-20 lg:py-24">
            <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start gap-20 lg:gap-10 text-white">
                <div className="w-full flex flex-col gap-12 lg:gap-16">
                    <h2 className='text-6xl'>Let&apos;s build together</h2>

                    <div className="flex flex-col gap-1">
                        <p className="text-xl">MAIL AT</p>

                        <a href='mailto:manovik18@gmail.com' className="text-lg underline">manovik18@gmail.com</a>
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className="text-xl">GET ON A CALL</p>

                        <a href='https://calendar.app.google/PvtM2gCkhiT7HYFA6' target="_blank" rel="noopener noreferrer" className="text-lg underline">https://calendar.app.google/PvtM2gCkhiT7HYFA6</a>
                    </div>
                </div>

                <div className="w-full flex flex-col md:flex-row md:justify-between lg:justify-end items-start gap-10 lg:gap-44">
                    <ul className="w-full lg:w-fit flex flex-col gap-5">
                        <li>
                            <NavLink href='#about'>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink href='#work'>WORK</NavLink>
                        </li>
                        <li>
                            <NavLink href='#about'>ABOUT</NavLink>
                        </li>
                    </ul>

                    <ul className="w-full lg:w-fit flex flex-col gap-5">
                        {socials.map((social, index) => (
                            <li key={index}>
                                <a href={social.url} target="_blank" rel="noopener noreferrer" className='group'>
                                    <div className="flex flex-row justify-between items-center gap-20">
                                        <p className='group-hover:text-secondary transition-colors duration-300'>{social.name}</p>

                                        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className='group-hover:rotate-45 transition-all duration-300'>
                                            <path fill="currentColor" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z" className="fill-white group-hover:fill-secondary transition-colors duration-300" />
                                            <path fill="currentColor" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z" className="fill-white group-hover:fill-secondary transition-colors duration-300" />
                                        </svg>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer