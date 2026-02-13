"use client"

import Link from 'next/link'
import React, { useRef } from 'react'
import NavSheet from './navSheet'
import NavItems from './navItems'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Navbar = () => {
    const navRef = useRef(null)

    useGSAP(() => {
        const showNav = gsap.from(navRef.current, {
            yPercent: -100,
            opacity: 0,
            paused: true,
            duration: 0.4,
            ease: "power1.inOut",
        }).progress(1); // Set progress to 1 so it starts in the 'visible' state

        ScrollTrigger.create({
            start: "top top",
            end: "max",
            scrub: true,
            onUpdate: (self) => {
                // self.direction is 1 when scrolling down and -1 when scrolling up
                if (self.direction === 1) {
                    showNav.reverse();
                } else {
                    showNav.play();
                }
            }
        });
    });

    return (
        <nav ref={navRef} className='fixed top-0 left-0 right-0 z-50 my-6 mx-6 md:my-8 md:mx-20'>
            <div className="flex flex-row justify-between items-center">
                <Link href="/" className='font-quicksand font-bold text-2xl outline-none border-none ring-0'>mano</Link>

                {/* Displayed only on larger screens */}
                <NavItems />

                {/* Displayed only on mobile and tablet screens */}
                <NavSheet />
            </div>
        </nav>
    )
}

export default Navbar