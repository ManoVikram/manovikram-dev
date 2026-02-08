import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className=''>
            <div className="flex flex-row justify-between items-center">
                <Link href="/" className='font-quicksand font-bold text-2xl'>mano</Link>

                <ul className='hidden md:flex md:flex-row md:justify-start md:items-center md:gap-8'>
                    <li>
                        <Link href='#work'>WORK</Link>
                    </li>
                    <li>
                        <Link href='#about'>ABOUT</Link>
                    </li>
                    <li>
                        <Link href='#contact' className="flex justify-center items-center bg-primary text-white px-5 py-3 rounded-full">
                            WORK WITH ME
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar