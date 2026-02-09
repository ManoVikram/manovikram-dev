import React from 'react'
import NavLink from './navLink'
import Link from 'next/link'

const NavItems = () => {
    return (
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
    )
}

export default NavItems