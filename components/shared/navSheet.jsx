"use client"

import React, { useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import NavLink from './navLink'
import Link from 'next/link'

const NavSheet = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
                <button className="flex flex-col gap-1.5 p-2">
                    <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </SheetTrigger>


            <SheetContent side="top" showCloseButton={false} className="data-[side=top]:max-h-[50vh] shadow-transparent border-0 inset-x-24">
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                </SheetHeader>

                <ul className='flex flex-col justify-start items-center gap-8' onClick={() => setIsOpen(false)}>
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
            </SheetContent>
        </Sheet>
    )
}

export default NavSheet