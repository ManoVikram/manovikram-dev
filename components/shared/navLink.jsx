import gsap from 'gsap'
import Link from 'next/link'
import React, { useRef } from 'react'

const NavLink = ({ href, children }) => {
  const linkRef = useRef(null)

  const handleMouseEnter = () => {
    const original = linkRef.current.querySelector(".original")
    const clone = linkRef.current.querySelector(".clone")

    gsap.to(original, {
      y: -20,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    })

    gsap.fromTo(clone, {
      y: 20,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  const handleMouseLeave = () => {
    const original = linkRef.current.querySelector(".original")
    const clone = linkRef.current.querySelector(".clone")

    gsap.fromTo(original, {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    })

    gsap.fromTo(clone, {
      y: 0,
      opacity: 1,
    }, {
      y: 20,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  return (
    <Link href={href} ref={linkRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='relative block overflow-hidden'>
      <span className='original block'>{children}</span>

      <span className='clone absolute top-0 left-0 text-gray-500 opacity-0'>{children}</span>
    </Link>
  )
}

export default NavLink