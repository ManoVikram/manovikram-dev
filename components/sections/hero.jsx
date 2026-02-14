"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import React, { useRef } from 'react'

const Hero = () => {
    const heroContainerRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "power3.out"
            }
        })

        tl.from(".animate-p", {
            x: 100,
            opacity: 0,
        }).from(".animate-title", {
            x: 100,
            opacity: 0,
        }, "-=0.8").from(".animate-subtitle", {
            x: 100,
            opacity: 0,
        }, "-=0.8").from(".animate-cta-button", {
            x: 100,
            opacity: 0
        }, "-=1")
    }, { scope: heroContainerRef })

    return (
        <section ref={heroContainerRef} className="min-h-dvh flex flex-col justify-center items-start py-6 md:py-8 gap-18">
            <p className="animate-p">Software Engineer <span>·</span> Applied AI</p>

            <div className="flex flex-col gap-2 md:gap-4">
                <h1 className="animate-title text-6xl md:text-7xl lg:text-8xl">Building software that thinks</h1>

                <p className="animate-subtitle text-xl md:text-2xl text-secondary">Crafting products where AI feels like magic and software feels like second nature. I turn ambitious visions into daily rituals.</p>
            </div>

            <Link href='#contact' className='animate-cta-button group flex justify-between items-center bg-primary hover:bg-background border-[1] hover:border-[1] border-transparent hover:border-primary px-6 py-4 rounded-full gap-3 transition-colors duration-300 cursor-pointer'>
                <p className="text-white group-hover:text-primary">LET&apos;S BUILD TOGETHER</p>

                <svg width="28" height="28" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className='group-hover:rotate-45 transition-all duration-300'>
                    <path fill="currentColor" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z" className="fill-white group-hover:fill-primary" />
                    <path fill="currentColor" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z" className="fill-white group-hover:fill-primary" />
                </svg>
            </Link>
        </section>
    )
}

export default Hero