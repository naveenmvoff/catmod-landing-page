import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import logo from '../assets/Logo-header.png'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <header className='bg-primary px-10 py-5 flex justify-between items-center border-b-[0.1px] border-[#E2E8F0] border-opacity-20'>
                
                <a href="#"><img src={logo} alt="Catmod Logo"/></a>
                
                <nav className='w-2/3 hidden lg:flex'>
                    <nav className='text-white'>
                        <ul className='flex gap-20 items-center'>
                            <li><a href="#">Framework & Libraries</a></li>
                            <li><a href="#">UI Library</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </nav>                                                              
                    <nav className='text-white ml-auto'>
                        <p className='btn'>Sign-Up</p>
                    </nav>
                </nav>
                <button onClick={() => setToggleMenu(!toggleMenu)} className='block lg:hidden' >
                    <Bars3Icon className='text-white h-12'/>
                </button>
            </header>

            {toggleMenu && ( 
                <nav className='block lg:hidden text-white mobile-nav'>
                    <ul className='flex flex-col gap-10 items-center'>
                        <li><a href="#">Framework & Libraries</a></li>
                        <li><a href="#">UI Library</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><p className='text-button'>Sign-Up</p></li>
                </ul>
            </nav>)}
        </>
    );
}