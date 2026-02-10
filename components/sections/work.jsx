import Image from 'next/image'
import React from 'react'

const Work = () => {
    const projects = [
        {
            title: 'Memelab',
            description: 'Create crisp, share-ready memes in one click.',
            image: '/images/memelab.png',
            link: ''
        },
        {
            title: 'Ascendant',
            description: 'Your AI sensei for smarter training and real progress',
            image: '/images/ascendant.png',
            link: ''
        },
        {
            title: 'Sixeyes Summarizer',
            description: '',
            image: '/images/sixeyes-summarizer.png',
            link: ''
        },
        {
            title: 'Navkar',
            description: 'Find a life partner, not just a profile.',
            image: '/images/navkar.png',
            link: ''
        },
    ]

    return (
        <section id="work" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 my-8 md:my-16">
                {projects.map((project, index) => {
                    return (
                        <div key={index} className="relative overflow-hidden rounded-4xl aspect-3/2">
                            <Image src={project.image} alt={`project-${index + 1}`} loading='eager' className='object-cover hover:scale-110 transition-transform duration-500' sizes="(max-width: 768px) 100vw, 50vw" fill />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Work