import Link from 'next/link'
import React from 'react'
import NavLink from './navLink'

const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 right-0 z-50 my-6 mx-6 md:my-8 md:mx-20'>
            <div className="flex flex-row justify-between items-center">
                <Link href="/" className='font-quicksand font-bold text-2xl'>mano</Link>

                <ul className='hidden md:flex md:flex-row md:justify-start md:items-center md:gap-8'>
                    <li>
                        <NavLink href='#work'>WORK</NavLink>
                    </li>
                    <li>
                        <NavLink href='#about'>ABOUT</NavLink>
                    </li>
                    <li>
                        <Link href='#contact' className="flex justify-center items-center bg-primary text-white px-5 py-3 rounded-full hover:scale-110 transition-transform duration-300">
                            WORK WITH ME
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar