"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const About = () => {
    const aboutContainerRef = useRef()

    useGSAP(() => {
        gsap.from(".animate-ethos-content", {
            x: 50,
            opacity: 0,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: aboutContainerRef.current,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        })
    }, { scope: aboutContainerRef })

    return (
        <section id="about" ref={aboutContainerRef} className="w-full my-24 md:my-32 lg:my-40">
            <div className="animate-ethos-content flex flex-col md:flex-row justify-start items-start gap-6 md:gap-24">
                <h5 className="text-3xl shrink-0">Ethos</h5>

                <h4 className="text-4xl/relaxed">Crafting software with high taste and zero noise. <span className="text-black/40">I build things that feel good to use and age even better.</span></h4>
            </div>
        </section>
    )
}

export default About