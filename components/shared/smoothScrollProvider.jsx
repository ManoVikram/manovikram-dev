"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ReactLenis } from "lenis/react"
import { useEffect, useRef } from "react"

export default function SmoothScrollProvider({ children }) {
    const lenisRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const lenis = lenisRef.current?.lenis
        if (!lenis) return

        lenis.on("scroll", ScrollTrigger.update)

        return () => {
            lenis.off("scroll", ScrollTrigger.update)
        }
    }, [])

    return (
        <ReactLenis
            ref={lenisRef}
            root
            options={{
                lerp: 0.08,
                smoothWheel: true,
            }}
        >
            {children}
        </ReactLenis>
    )
}
