import React, { useState } from 'react';
import { BoltIcon, Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className='bg-green-300 my-container h-16 px-4 relative'>
            <div className='flex items-center justify-between'>
                <Link to='/' className='inline-flex items-center gap-1'>
                    <BoltIcon className='text-blue-600 h-14 w-10' />
                    <span className='text-xl font-medium uppercase'>NextPage</span>
                </Link>
                <ul className='lg:flex gap-4 hidden'>
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/books' className={({ isActive }) => (isActive ? 'active' : 'default')}>Books</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'default')}>About</NavLink>
                    </li>
                </ul>
                <Bars3Icon className='h-14 w-14 lg:hidden cursor-pointer' onClick={() => setIsOpen(true)}/>
            </div>
            {/* Mobile Menu */}
            {
                isOpen &&

                    <div className='absolute top-2 text-center w-11/12 bg-slate-100 rounded pb-4 pe-2 pt-2 z-10'>
                        <XCircleIcon className='h-10 w-10 ms-auto cursor-pointer' onClick={()=> setIsOpen(false)}/>
                        <Link to='/' className='inline-flex items-center gap-1'>
                            <BoltIcon className='text-blue-600 h-14 w-10' />
                            <span className='text-xl font-medium uppercase'>NextPage</span>
                        </Link>
                        <ul>
                            <li>
                                <Link to='/' className='default' onClick={()=> setIsOpen(false)}>Home</Link>
                            </li>
                            <li>
                                <Link to='/books' className='default' onClick={()=> setIsOpen(false)}>Books</Link>
                            </li>
                            <li>
                                <Link to='/about' className='default' onClick={()=> setIsOpen(false)}>About</Link>
                            </li>
                        </ul>
                    </div>

            }
        </nav>
    );
};

export default Header;