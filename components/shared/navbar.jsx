import Link from 'next/link'
import React from 'react'
import NavSheet from './navSheet'
import NavItems from './navItems'

const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 right-0 z-50 my-6 mx-6 md:my-8 md:mx-20'>
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