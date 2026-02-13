"use client"

import React from 'react'
import { ReactLenis, useLenis } from 'lenis/dist/lenis-react'

const SmoothScroller = ({ children }) => {
    return (
        <ReactLenis root options={{
            lerp: 0.1,
            smoothWheel: true,
            anchors: {
                offset: 80
            },
            stopInertiaOnNavigate: true
        }}>
            {children}
        </ReactLenis>
    )
}

export default SmoothScroller