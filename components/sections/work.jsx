"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

const Work = () => {
    const projectsContainerRef = useRef(null)

    const projects = [
        {
            title: 'Switchworthy',
            description: 'Resume analyzer for developers with 0-2 years of experience targeting US remote roles.',
            image: '/images/switchworthy.png',
            link: 'https://switchworthy.xyz/'
        },
        {
            title: 'Memelab',
            description: 'Create crisp, share-ready memes in one click.',
            image: '/images/memelab.png',
            link: 'https://memelab-five.vercel.app/'
        },
        {
            title: 'Ascendant',
            description: 'Your AI sensei for smarter training and real progress',
            image: '/images/ascendant.png',
            link: 'https://github.com/ManoVikram/ascendant-ai-fitness-coach'
        },
        {
            title: 'Sixeyes Summarizer',
            description: 'AI-powered transcription, summarization & key-takeaways in seconds.',
            image: '/images/sixeyes-summarizer.png',
            link: 'https://github.com/ManoVikram/Six-Eyes-Audio-Summarizer'
        },
        // {
        //     title: 'Navkar',
        //     description: 'Find a life partner, not just a profile.',
        //     image: '/images/navkar.png',
        //     link: 'https://github.com/ManoVikram/Navkar-Matrimony-App'
        // },
    ]

    useGSAP(() => {
        gsap.from(".animate-project-card", {
            scale: 0.9,
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: projectsContainerRef.current,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        })
    }, { scope: projectsContainerRef })

    return (
        <section id="work" ref={projectsContainerRef} className="w-full my-6 md:my-10 lg:my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {projects.map((project, index) => {
                    return (
                        <Link key={index} href={project.link} target="_blank" rel="noopener noreferrer">
                            <div className="animate-project-card group/project-card relative overflow-hidden rounded-4xl aspect-3/2 cursor-pointer">
                                <Image src={project.image} alt={`project-${index + 1}`} loading='eager' className='object-cover group-hover/project-card:scale-110 transition-transform duration-500' sizes="(max-width: 768px) 100vw, 50vw" fill />

                                <div className="absolute inset-0 flex flex-col justify-between items-start p-8 md:p-10 group-hover/project-card:backdrop-blur-xs transition-all duration-300 opacity-0 group-hover/project-card:opacity-100">
                                    <div className="flex flex-col justify-start items-start gap-2">
                                        <h2 className="w-1/2 text-white text-6xl font-semibold">{project.title}</h2>

                                        <p className="text-white text-lg font-semibold">{project.description}</p>
                                    </div>

                                    <button className='group/button flex justify-between items-center bg-white hover:bg-background px-6 py-4 rounded-full gap-3 transition-colors duration-300 cursor-pointer'>
                                        <p className="text-primary">CHECK OUT</p>

                                        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className='group-hover/button:rotate-45 transition-all duration-300'>
                                            <path fill="currentColor" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z" className="fill-primary group-hover:fill-primary" />
                                            <path fill="currentColor" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z" className="fill-primary group-hover:fill-primary" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Work